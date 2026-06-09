import { useEffect, useState } from "react";

type Item = {
  title: string;
  link: string;
  pubDate?: string;
  description?: string;
  thumbnail?: string;
};

const FEED_URL =
  "https://globalcomix.com/c/global-epic-fail-world-succession-deed/chapters/de/rss";

const ENDPOINTS = [
  `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(FEED_URL)}`,
  `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`,
];

function parseXml(xml: string): Item[] {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  return Array.from(doc.querySelectorAll("item")).map((el) => {
    const get = (t: string) => el.querySelector(t)?.textContent?.trim() ?? "";
    const desc = get("description");
    const thumb =
      el.querySelector("enclosure")?.getAttribute("url") ??
      desc.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
    return {
      title: get("title"),
      link: get("link"),
      pubDate: get("pubDate"),
      description: desc.replace(/<[^>]+>/g, "").slice(0, 220),
      thumbnail: thumb || undefined,
    };
  });
}

export default function GlobalComixFeed() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const url of ENDPOINTS) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const ct = res.headers.get("content-type") || "";
          let parsed: Item[] = [];
          if (ct.includes("application/json")) {
            const json = await res.json();
            parsed = (json.items || []).map((i: any) => ({
              title: i.title,
              link: i.link,
              pubDate: i.pubDate,
              description: (i.description || "").replace(/<[^>]+>/g, "").slice(0, 220),
              thumbnail: i.thumbnail || i.enclosure?.link,
            }));
          } else {
            parsed = parseXml(await res.text());
          }
          if (!cancelled && parsed.length) {
            setItems(parsed.slice(0, 12));
            return;
          }
        } catch {
          /* try next */
        }
      }
      if (!cancelled) setError("Feed momentan nicht erreichbar.");
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
        {error}{" "}
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href="https://globalcomix.com/c/global-epic-fail-world-succession-deed"
          target="_blank"
          rel="noreferrer"
        >
          Auf GlobalComix öffnen →
        </a>
      </div>
    );
  }

  if (!items) {
    return (
      <div className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground">
        Lade Kapitel…
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <li
          key={i}
          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-foreground/40"
        >
          <a href={it.link} target="_blank" rel="noreferrer" className="flex flex-col h-full">
            {it.thumbnail && (
              <div className="aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={it.thumbnail}
                  alt={it.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="text-base font-medium leading-snug">{it.title}</h3>
              {it.description && (
                <p className="text-sm text-muted-foreground line-clamp-3">{it.description}</p>
              )}
              {it.pubDate && (
                <time className="mt-auto pt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(it.pubDate).toLocaleDateString()}
                </time>
              )}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

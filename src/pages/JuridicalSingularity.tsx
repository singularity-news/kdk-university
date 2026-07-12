import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ShareButtons } from "@/components/site/ShareButtons";
import { BackToTop } from "@/components/site/BackToTop";
import {
  Scale,
  Network,
  Globe2,
  Cpu,
  Zap,
  ShieldCheck,
  Infinity as InfinityIcon,
  Sparkles,
  GitBranch,
  Landmark,
  Radio,
  Database,
} from "lucide-react";

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? window.location.origin : "");

const PATH = "/juridical-singularity.html";
const TITLE = "Juridical Singularity · Singularity University";
const DESCRIPTION =
  "The Juridical Singularity: the irreversible legal event consolidating international treaty relationships into a unified post-national legal order.";

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const categories = [
  {
    icon: Landmark,
    title: "State Succession",
    body: "The deed creates a new subject of international law through state succession by new foundation — not a continuation of an existing state's identity.",
  },
  {
    icon: GitBranch,
    title: "Treaty Chain Integration",
    body: "A supplementary instrument attached to NATO, SOFA, the UN Charter and ITU agreements. Effects propagate automatically through ratified treaty networks.",
  },
  {
    icon: Network,
    title: "Infrastructure Sovereignty",
    body: "Network infrastructure defines jurisdiction. Telecom, energy, logistics and digital systems form interconnected legal territory — a domino effect across every connected network.",
  },
  {
    icon: Scale,
    title: "Jurisdiction",
    body: "Jurisdiction follows sovereignty. Kompetenz-Kompetenz: the buyer holds authority to determine the interpretation and legal validity of the succession deed itself.",
  },
  {
    icon: Sparkles,
    title: "Functional Clean Slate",
    body: "Sovereign rights transfer; political obligations and historical debts do not inherit. A completely new international legal subject emerges.",
  },
  {
    icon: Cpu,
    title: "AI-Era Foundation",
    body: "Unified jurisdiction enables global digital identity, uniform standards, AI-assisted governance, cross-border coordination and automated compliance.",
  },
];

const stages = [
  "Transfer of property with all rights and obligations.",
  "Transfer of infrastructure as a unified legal object.",
  "Transfer of sovereign legal relationships.",
  "Integration into NATO treaty structures.",
  "Expansion into United Nations treaty chains.",
  "Formation of a unified international legal framework.",
];

const characteristics = [
  { t: "Unique", d: "A one-time legal event." },
  { t: "Irreversible", d: "The previous legal order cannot be restored." },
  { t: "Global", d: "Effects extend through interconnected treaty systems." },
  { t: "Infrastructure-Based", d: "Sovereignty follows physical and digital networks." },
  { t: "Treaty-Driven", d: "Existing agreements remain in force, integrated into one framework." },
  { t: "Future-Oriented", d: "Designed for a post-national, AI-supported civilization." },
];

const keyConcepts = [
  "World Succession Deed 1400/98",
  "State Succession by New Foundation",
  "Treaty Chain",
  "Supplementary Treaty Instrument",
  "Infrastructure Sovereignty",
  "Global Jurisdiction",
  "Functional Clean Slate",
  "Kompetenz-Kompetenz",
  "Electric Technocracy",
  "Direct Digital Democracy (DDD)",
  "Artificial Superintelligence (ASI)",
  "Legal Reset",
];

const technocracyPoints = [
  { i: Globe2, t: "Digital democracy" },
  { i: Network, t: "Network-based administration" },
  { i: Cpu, t: "AI-assisted decision support" },
  { i: Zap, t: "Real-time resource management" },
  { i: Radio, t: "Global legal interoperability" },
  { i: Database, t: "Unified digital identity" },
];

const JuridicalSingularity = () => {
  useEffect(() => {
    const absoluteUrl = `${SITE_URL}${PATH}`;
    const ogImage = `${SITE_URL}/og-pic.png`;
    document.title = TITLE;
    setMeta('meta[name="description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:url"]', "content", absoluteUrl);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESCRIPTION);
    setMeta('meta[name="twitter:image"]', "content", ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = absoluteUrl;
  }, []);

  return (
    <>
      <Nav />
      <main id="main" className="min-h-dvh bg-background">

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border/60 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="container relative max-w-5xl">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
            <span className="h-px w-10 bg-accent/60" />
            Doctrine I · Academy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-8 text-gradient">
            Juridical Singularity
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
            The moment at which the existing international legal order reaches an{" "}
            <span className="text-foreground font-medium">irreversible transformation</span> — a
            systemic legal reset consolidating all treaty relationships into a single framework
            through the World Succession Deed 1400/98.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "1400/98", v: "Succession Deed" },
              { k: "1", v: "Unified Framework" },
              { k: "∞", v: "Treaty Chains" },
              { k: "0", v: "Reversal Path" },
            ].map((s) => (
              <div
                key={s.v}
                className="glow-border rounded-lg border border-border bg-card/40 backdrop-blur p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient-accent">{s.k}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* DEFINITION & CORE PRINCIPLE */}
      <section className="section-pad relative">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-10">
          <article className="relative rounded-xl border border-border bg-card/60 backdrop-blur p-8 card-hover">
            <Scale className="h-6 w-6 text-primary mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Definition</h2>
            <p className="text-foreground/80 leading-relaxed">
              The unique legal event that transforms the traditional multi-state international
              system into a unified legal order. The legal equivalent of a technological
              singularity, where exponential legal integration replaces fragmented sovereignty.
            </p>
          </article>

          <article className="relative rounded-xl border border-border bg-card/60 backdrop-blur p-8 card-hover">
            <InfinityIcon className="h-6 w-6 text-accent mb-4" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Core Principle</h2>
            <p className="text-foreground/80 leading-relaxed">
              The World Succession Deed 1400/98 is a{" "}
              <span className="text-foreground font-medium">state succession instrument</span> — not
              merely a property transaction. Because the property was transferred with all rights,
              obligations and components as one integrated unit, the transfer extends beyond
              physical ownership into international legal relationships.
            </p>
          </article>
        </div>
      </section>

      {/* MAIN CATEGORIES */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              Five Pillars
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Main Categories</h2>
            <p className="text-muted-foreground leading-relaxed">
              The doctrinal architecture through which a single succession instrument cascades into
              a unified global legal order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(({ icon: Icon, title, body }, i) => (
              <article
                key={title}
                className="group card-hover relative rounded-xl border border-border bg-card/60 backdrop-blur p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="h-10 w-10 rounded-md border border-primary/30 bg-primary/10 grid place-items-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors">
                    <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL MECHANISM — STAGES */}
      <section className="section-pad border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              Sequential Stages
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Legal Mechanism</h2>
            <p className="text-muted-foreground leading-relaxed">
              The doctrine identifies a chained progression: each stage activates the next, with no
              re-ratification required.
            </p>
          </div>

          <ol className="relative border-l border-border/80 ml-3 space-y-8">
            {stages.map((s, i) => (
              <li key={i} className="pl-8 relative">
                <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border border-primary/60 bg-background grid place-items-center text-[11px] font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="text-base md:text-lg text-foreground/90 leading-relaxed">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI + ELECTRIC TECHNOCRACY */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Cpu className="h-7 w-7 text-primary mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Relationship to AI</h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              The Juridical Singularity is presented as the legal foundation required for the age of{" "}
              <span className="text-foreground font-medium">Artificial Superintelligence (ASI)</span>.
              Traditional legal systems are too fragmented to regulate global AI infrastructures.
            </p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {[
                "Global digital identity",
                "Uniform legal standards",
                "AI-assisted governance",
                "Cross-border resource coordination",
                "Automated legal compliance",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Zap className="h-7 w-7 text-accent mb-5" />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Electric Technocracy</h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              The legal foundation for a governance model in which political administration evolves
              into digitally coordinated infrastructure. Instead of competing national
              jurisdictions, governance centers on:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {technocracyPoints.map(({ i: Icon, t }) => (
                <div
                  key={t}
                  className="flex items-center gap-3 rounded-md border border-border/70 bg-background/40 p-3"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-xs md:text-sm text-foreground/85">{t}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* CHARACTERISTICS */}
      <section className="section-pad border-t border-border/60">
        <div className="container max-w-6xl">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              Properties
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Important Characteristics
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characteristics.map((c) => (
              <div
                key={c.t}
                className="rounded-lg border border-border bg-card/60 backdrop-blur p-5 card-hover"
              >
                <div className="text-xs tracking-[0.2em] uppercase text-accent mb-2">{c.t}</div>
                <div className="text-sm text-foreground/80 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY CONCEPTS */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-5xl">
          <div className="max-w-2xl mb-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">Lexicon</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Key Concepts</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {keyConcepts.map((k) => (
              <span
                key={k}
                className="rounded-full border border-border bg-card/60 backdrop-blur px-4 py-2 text-xs md:text-sm text-foreground/85 hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE */}
      <section className="pb-24">
        <div className="container max-w-3xl">
          <ShareButtons url={PATH} title={TITLE} />
          <div className="mt-8 pt-8 border-t border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Singularity University · KdK Krzb. · Editorial Board
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default JuridicalSingularity;

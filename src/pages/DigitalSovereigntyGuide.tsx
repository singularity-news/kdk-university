import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Network, ShieldCheck, Globe2, Cpu, Scale, Zap } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { ShareButtons } from "@/components/site/ShareButtons";

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://singularity-institute.lovable.app";

const PATH = "/research/digital-sovereignty-guide";
const TITLE = "What is Digital Sovereignty? A Guide for the Post-National Era";
const DESCRIPTION =
  "A comprehensive guide to digital sovereignty: from territorial jurisdiction to infrastructure-based control, ASI governance, and the Juridical Singularity.";
const PUBLISHED = "2026-07-04";

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

const sections = [
  { id: "definition", label: "Definition" },
  { id: "territorial-to-infrastructure", label: "Territorial → Infrastructure" },
  { id: "pillars", label: "Core Pillars" },
  { id: "asi", label: "ASI & Unified Law" },
  { id: "juridical-singularity", label: "Juridical Singularity" },
  { id: "practical", label: "In Practice" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    q: "What is digital sovereignty?",
    a: "Digital sovereignty is the capacity of a polity — a state, a union, or a networked community — to govern the digital infrastructure, data, standards and computational capacity on which its social, economic and legal life depends. It shifts the locus of authority from bounded territory to the stacks that carry decisions and value.",
  },
  {
    q: "How is digital sovereignty different from data sovereignty?",
    a: "Data sovereignty is a subset of digital sovereignty focused on where data is stored and which laws apply to it. Digital sovereignty is broader: it also covers the compute layer, network layer, protocol layer and the AI models that increasingly make consequential decisions.",
  },
  {
    q: "Why does digital sovereignty matter in the age of AI?",
    a: "Artificial Superintelligence (ASI) will operate across every jurisdiction simultaneously. A polity that does not co-govern the infrastructure ASI runs on cannot meaningfully regulate outcomes inside its own borders — hence the shift from territorial control to infrastructure-based control.",
  },
  {
    q: "Is digital sovereignty the same as protectionism?",
    a: "No. Protectionism raises walls around a national market. Digital sovereignty is about legitimate control of decision-critical infrastructure, which can equally be pursued through open protocols, multilateral instruments and shared computational governance.",
  },
  {
    q: "How does digital sovereignty relate to the Juridical Singularity?",
    a: "The Juridical Singularity is the transition point at which the international legal order restructures around a unified, infrastructure-anchored framework. Digital sovereignty is the practical stack — infrastructure, data, AI models — on which that new framework operates.",
  },
];

const DigitalSovereigntyGuide = () => {
  useEffect(() => {
    document.title = `${TITLE} · Singularity University`;
    setMeta('meta[name="description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:title"]', "content", TITLE);
    setMeta('meta[property="og:description"]', "content", DESCRIPTION);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}${PATH}`);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", TITLE);
    setMeta('meta[name="twitter:description"]', "content", DESCRIPTION);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${PATH}`;

    const article = document.createElement("script");
    article.type = "application/ld+json";
    article.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      inLanguage: "en",
      author: {
        "@type": "Organization",
        name: "Singularity University KdK Krzb.",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Singularity University KdK Krzb.",
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      about: [
        { "@type": "Thing", name: "Digital Sovereignty" },
        { "@type": "Thing", name: "Juridical Singularity" },
        { "@type": "Thing", name: "Artificial Superintelligence" },
        { "@type": "Thing", name: "Infrastructure Sovereignty" },
      ],
    });
    document.head.appendChild(article);

    const faqLd = document.createElement("script");
    faqLd.type = "application/ld+json";
    faqLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(faqLd);

    const breadcrumbs = document.createElement("script");
    breadcrumbs.type = "application/ld+json";
    breadcrumbs.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Research", item: `${SITE_URL}/research` },
        { "@type": "ListItem", position: 3, name: TITLE, item: `${SITE_URL}${PATH}` },
      ],
    });
    document.head.appendChild(breadcrumbs);

    return () => {
      [article, faqLd, breadcrumbs].forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, []);

  const pillars = [
    {
      Icon: Network,
      title: "Infrastructure",
      body: "Sovereign control of the physical and virtual stacks — data centers, subsea cables, chip supply, cloud regions.",
    },
    {
      Icon: ShieldCheck,
      title: "Data",
      body: "Rules about where data lives, who reads it, and which legal regime governs its use across borders.",
    },
    {
      Icon: Cpu,
      title: "Compute & AI",
      body: "Access to training compute, model weights, evaluation pipelines and the ability to audit AI decision loops.",
    },
    {
      Icon: Globe2,
      title: "Standards",
      body: "Participation in protocol-setting: identity, payments, interoperability, safety benchmarks for ASI.",
    },
    {
      Icon: Scale,
      title: "Jurisdiction",
      body: "The legal instruments that project authority onto infrastructure — treaties, licences, supplementary instruments.",
    },
    {
      Icon: Zap,
      title: "Continuity",
      body: "The capacity to keep essential services running under external pressure, outage, sanction, or systemic shock.",
    },
  ];

  return (
    <main className="min-h-dvh bg-background">
      <Nav />

      <article className="relative pt-32 pb-24">
        <div className="container max-w-3xl">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Research
          </Link>

          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/research" className="hover:text-foreground">Research</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">Digital Sovereignty</li>
            </ol>
          </nav>

          <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
            Research Guide · Governance
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-[1.1] mb-6 text-gradient">
            {TITLE}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            A practical guide to digital sovereignty in an age when jurisdictions no longer end at borders
            and Artificial Superintelligence operates across every stack at once.
          </p>

          <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground border-y border-border/60 py-4 mb-12">
            By Singularity University · Published July 4, 2026
          </div>

          {/* Table of contents */}
          <aside
            aria-label="Contents"
            className="mb-14 rounded-lg border border-border bg-card/40 p-5"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">Contents</div>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                    {String(i + 1).padStart(2, "0")} · {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground">
            <section id="definition" className="scroll-mt-28">
              <h2>1. What is digital sovereignty?</h2>
              <p>
                <strong>Digital sovereignty</strong> is the capacity of a polity — a state, a union, a
                supranational body or a networked community — to govern the digital infrastructure, data,
                standards and computational capacity on which its social, economic and legal life
                depends. Where classical sovereignty asks <em>who controls this territory?</em>, digital
                sovereignty asks <em>who controls the stack that carries every decision made inside
                it?</em>
              </p>
              <p>
                It is not a synonym for data localization, not the same as protectionism, and not
                reducible to cybersecurity. It is the legitimate authority to make binding rules for
                infrastructure whose consequences reach into every domain of life.
              </p>
            </section>

            <section id="territorial-to-infrastructure" className="scroll-mt-28">
              <h2>2. From territorial control to infrastructure control</h2>
              <p>
                The Westphalian order tied legal authority to territory. That model was already stretched
                by transnational trade and finance; the digital transition has broken it. Value, evidence,
                identity, communications and — increasingly — decisions produced by AI models cross
                jurisdictions in milliseconds. A ministry can pass a law inside its borders that never
                touches the stack on which its citizens actually live.
              </p>
              <p>
                Digital sovereignty is the re-anchoring of legal authority to the infrastructure that
                carries these flows: data centers, subsea cables, chip supply chains, cloud regions, model
                weights, standards bodies, and the legal instruments that regulate all of them.
              </p>
            </section>

            <section id="pillars" className="scroll-mt-28">
              <h2>3. The six core pillars</h2>
              <p>
                Serious digital-sovereignty policy touches six layers simultaneously. Any single-layer
                intervention — a data-residency rule, a chip export ban, a national cloud — is only as
                strong as the weakest of the others.
              </p>
              <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
                {pillars.map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-lg border border-border bg-card/40 p-5 hover:border-primary/40 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                    <div className="font-semibold mb-1">{title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="asi" className="scroll-mt-28">
              <h2>4. Why ASI forces a unified global framework</h2>
              <p>
                <strong>Artificial Superintelligence (ASI)</strong> does not respect jurisdictional
                boundaries. A single system trained in one region, hosted in a second and consulted from
                a third can move markets, sway elections and reroute logistics in every fourth. There is
                no coherent way for one national regulator to govern such a system alone.
              </p>
              <p>
                A meaningful digital-sovereignty regime therefore has two faces. Internally, it secures
                the polity's own control of critical infrastructure. Externally, it commits to a shared
                framework — treaty chains, supplementary instruments, protocol-level standards — that
                make cross-border AI governance possible. In our doctrine, that shared framework is the{" "}
                <Link to="/juridical-singularity">Juridical Singularity</Link>.
              </p>
            </section>

            <section id="juridical-singularity" className="scroll-mt-28">
              <h2>5. Digital sovereignty and the Juridical Singularity</h2>
              <p>
                The Juridical Singularity is the transition point at which the international legal order
                restructures around a unified, infrastructure-anchored framework. It is enabled by three
                things digital sovereignty already presupposes: standardised identity, standardised
                evidence, and standardised computational accountability.
              </p>
              <p>
                Once these are in place, sovereignty stops being a scarce territorial claim and becomes
                a distributed capacity: many polities co-governing shared stacks under common rules.
                This is the same substrate on which{" "}
                <Link to="/electric-technocracy">Electric Technocracy</Link> — ASI-supported governance,
                Direct Digital Democracy and the technology dividend — becomes operationally viable.
              </p>
            </section>

            <section id="practical" className="scroll-mt-28">
              <h2>6. Digital sovereignty in practice</h2>
              <p>
                What does credible digital-sovereignty policy actually look like? Six moves recur across
                every serious framework we have studied:
              </p>
              <ol>
                <li>Map the stack the polity actually depends on — down to specific vendors, regions and models.</li>
                <li>Identify single points of failure and single points of foreign control.</li>
                <li>Diversify infrastructure and standardise interfaces so substitution is possible.</li>
                <li>Anchor AI decisions in auditable, jurisdictionally-bound compute.</li>
                <li>Enter supplementary treaty instruments that bind co-governance of shared infrastructure.</li>
                <li>Build continuity plans — the ability to keep essential services running under stress.</li>
              </ol>
              <p>
                None of these is achievable inside a single-nation frame. All of them become tractable
                inside a treaty-chain architecture designed for infrastructure jurisdiction.
              </p>
            </section>

            <section id="faq" className="scroll-mt-28">
              <h2>7. Frequently asked questions</h2>
              <dl className="not-prose space-y-6 my-8">
                {faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-lg border border-border bg-card/40 p-5"
                  >
                    <dt className="font-semibold mb-2">{f.q}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="not-prose mt-14 rounded-lg border border-primary/40 bg-primary/5 p-6">
              <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-3">
                Continue reading
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/juridical-singularity" className="text-primary hover:underline">
                    → Juridical Singularity: the systemic legal reset
                  </Link>
                </li>
                <li>
                  <Link to="/electric-technocracy" className="text-primary hover:underline">
                    → Electric Technocracy: ASI, DDD and the technology dividend
                  </Link>
                </li>
                <li>
                  <Link to="/research" className="text-primary hover:underline">
                    → Full research index (open access via Zenodo)
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <ShareButtons url={PATH} title={TITLE} />
        </div>
      </article>

      <BackToTop />
      <Footer />
    </main>
  );
};

export default DigitalSovereigntyGuide;

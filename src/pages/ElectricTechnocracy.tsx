import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ShareButtons } from "@/components/site/ShareButtons";
import { BackToTop } from "@/components/site/BackToTop";
import {
  Cpu,
  Vote,
  Coins,
  Wallet,
  Factory,
  Sparkles,
  HeartPulse,
  Globe2,
  Eye,
  ShieldCheck,
  Scale,
  Rocket,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://singularity-institute.lovable.app";

const PATH = "/electric-technocracy.html";
const TITLE = "Electric Technocracy · ASI, DDD & UBI Governance Model";
const DESCRIPTION =
  "Electric Technocracy: governance through ASI analysis, Direct Digital Democracy and a technology dividend (UBI) — a peaceful, automated post-scarcity civilization.";

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

const asiSignals = [
  "Economic conditions",
  "Resource availability",
  "Scientific knowledge",
  "Environmental data",
  "Infrastructure performance",
  "Public needs",
];

const dddSteps = [
  "Proposal submission",
  "Public discussion",
  "AI-supported impact analysis",
  "Digital voting",
  "Automated implementation",
];

const taxTargets = [
  { i: Cpu, t: "Robots" },
  { i: Sparkles, t: "AI systems" },
  { i: Factory, t: "Autonomous factories" },
  { i: Coins, t: "Machine-generated output" },
];

const ubiGoals = [
  "Eliminating poverty",
  "Reducing economic inequality",
  "Providing financial security",
  "Encouraging creativity and entrepreneurship",
  "Supporting lifelong education",
];

const humanRoles = [
  "Creativity",
  "Art",
  "Scientific discovery",
  "Innovation",
  "Culture",
  "Ethical decision-making",
];

const medicineAdvances = [
  "AI-assisted medicine",
  "Robotic healthcare",
  "Genetic engineering",
  "CRISPR gene editing",
  "Precision medicine",
  "Longevity research",
];

const globalObjectives = [
  "Global cooperation",
  "Equal legal treatment",
  "Peaceful conflict resolution",
  "Shared technological progress",
  "Worldwide infrastructure coordination",
];

const ethics = [
  "Human dignity remains the highest priority.",
  "Technology should serve humanity rather than dominate it.",
  "AI should increase fairness, efficiency, and transparency.",
  "Economic prosperity should be shared by all people.",
  "Innovation should promote peace and long-term sustainability.",
];

const vision = [
  { i: Cpu, t: "Artificial Superintelligence (ASI)" },
  { i: Vote, t: "Direct Digital Democracy (DDD)" },
  { i: Wallet, t: "Universal Basic Income (UBI)" },
  { i: Factory, t: "Automation and robotics" },
  { i: Coins, t: "Taxation of machine productivity" },
  { i: Sparkles, t: "Post-scarcity economics" },
  { i: Globe2, t: "Global cooperation" },
  { i: HeartPulse, t: "Advanced medicine and longevity" },
  { i: ShieldCheck, t: "Environmental sustainability" },
];

const toc = [
  { id: "definition", label: "Definition" },
  { id: "principle", label: "Principle" },
  { id: "mechanism", label: "Mechanism (ASI)" },
  { id: "ddd", label: "Direct Digital Democracy" },
  { id: "economy", label: "Economy & UBI" },
  { id: "society", label: "Society & Humans" },
  { id: "science", label: "Science & Governance" },
  { id: "ethics", label: "Ethics" },
  { id: "vision", label: "Vision" },
  { id: "faq", label: "FAQ" },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Electric Technocracy?",
    a: "Electric Technocracy is a governance model in which Artificial Superintelligence (ASI), robotics and automation handle most economic production and public administration, while citizens make political decisions directly via Direct Digital Democracy.",
  },
  {
    q: "How does Direct Digital Democracy (DDD) work?",
    a: "Proposals are submitted publicly, discussed, analyzed by AI for impact, and then decided through digital voting using a secure digital identity. Approved decisions are implemented through automated systems.",
  },
  {
    q: "Is ASI in charge of political decisions?",
    a: "No. ASI serves as the analytical core and prepares evidence-based options. The final decisions always remain with citizens through democratic voting.",
  },
  {
    q: "How is Universal Basic Income (UBI) financed?",
    a: "UBI is funded through taxation of machine productivity — robots, AI systems, autonomous factories and machine-generated output — rather than taxes on human labor.",
  },
  {
    q: "What is the relationship between Electric Technocracy and the Juridical Singularity?",
    a: "The Juridical Singularity, linked to World Succession Deed 1400/98, provides the unified legal foundation that enables a global transition toward Electric Technocracy.",
  },
  {
    q: "What role do humans play in a fully automated society?",
    a: "Humans remain the source of creativity, art, science, innovation, culture and ethical judgment. The goal is not to replace humanity, but to free people from compulsory labor.",
  },
];

const ElectricTechnocracy = () => {
  const [activeId, setActiveId] = useState<string>(toc[0].id);
  const [tocOpen, setTocOpen] = useState(false);

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

    const ldId = "ld-electric-technocracy";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Electric Technocracy",
      description: DESCRIPTION,
      url: absoluteUrl,
      mainEntityOfPage: absoluteUrl,
      author: { "@type": "Organization", name: "Singularity University" },
      publisher: { "@type": "Organization", name: "Singularity University" },
    });
  }, []);

  return (
    <main id="main" className="min-h-dvh bg-background">
      <Nav />

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border/60 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div className="container relative max-w-5xl px-4 sm:px-6">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
            <span>Doctrine II · Academy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 sm:mb-8 text-gradient break-words">
            Electric Technocracy
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-foreground/85 leading-relaxed max-w-3xl">
            A governance model for a future in which{" "}
            <strong className="text-foreground font-medium">
              AI, ASI, robotics and automation
            </strong>{" "}
            drive economic production and public administration — a peaceful, highly automated
            civilization where humans are freed from compulsory labor.
          </p>

          <ul className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 list-none p-0">
            {[
              { k: "ASI", v: "Analytical Core" },
              { k: "DDD", v: "Direct Digital Democracy" },
              { k: "UBI", v: "Technology Dividend" },
              { k: "0%", v: "Tax on Humans" },
            ].map((s) => (
              <li
                key={s.v}
                className="glow-border rounded-lg border border-border bg-card/60 backdrop-blur p-3 sm:p-4"
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-accent">
                  {s.k}
                </div>
                <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mt-2 leading-snug">
                  {s.v}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* TABLE OF CONTENTS */}
      <nav
        aria-label="On this page"
        className="border-b border-border/60 bg-card/30 backdrop-blur sticky top-16 z-30"
      >
        <div className="container max-w-6xl px-4 sm:px-6 py-3 overflow-x-auto">
          <ul className="flex gap-2 sm:gap-3 list-none p-0 m-0 whitespace-nowrap text-xs sm:text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="inline-block rounded-full border border-border bg-background/60 px-3 py-1.5 text-foreground/80 hover:text-foreground hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* DEFINITION + PRINCIPLE */}
      <section
        id="definition"
        aria-labelledby="definition-heading"
        className="section-pad relative scroll-mt-32"
      >
        <div className="container max-w-5xl px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 card-hover">
            <Sparkles className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              01 · Definition
            </p>
            <h2 id="definition-heading" className="text-2xl md:text-3xl font-semibold mb-4">
              Core Philosophy
            </h2>
            <p className="text-foreground/85 leading-relaxed">
              Replace traditional political systems with{" "}
              <strong className="text-foreground font-medium">
                technology-supported governance
              </strong>{" "}
              — decisions based on objective analysis, scientific evidence and direct public
              participation instead of party politics.
            </p>
          </article>
          <article
            id="principle"
            aria-labelledby="principle-heading"
            className="scroll-mt-32 rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 card-hover"
          >
            <Globe2 className="h-6 w-6 text-accent mb-4" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              Principle
            </p>
            <h2 id="principle-heading" className="text-2xl md:text-3xl font-semibold mb-4">
              Shared Progress
            </h2>
            <p className="text-foreground/85 leading-relaxed">
              Technological progress should benefit all humanity equally rather than a limited
              number of individuals or institutions.
            </p>
          </article>
        </div>
      </section>

      {/* MECHANISM — ASI */}
      <section
        id="mechanism"
        aria-labelledby="mechanism-heading"
        className="section-pad border-t border-border/60 relative scroll-mt-32"
      >
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              02 · Mechanism — The Analytical Core
            </p>
            <h2
              id="mechanism-heading"
              className="text-3xl md:text-5xl font-bold mb-6 text-gradient"
            >
              Artificial Superintelligence
            </h2>
            <p className="text-foreground/85 leading-relaxed mb-4">
              ASI functions as the analytical foundation — not a political ruler. It continuously
              evaluates enormous amounts of real-time information and generates multiple
              evidence-based policy options. Citizens retain the final decision through democratic
              voting.
            </p>
            <p className="text-foreground/90 font-medium border-l-2 border-primary/60 pl-5">
              The objective is to reduce corruption, inefficiency, ideological conflict and
              administrative complexity.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
            {asiSignals.map((s) => (
              <li
                key={s}
                className="card-hover rounded-lg border border-border bg-card/60 backdrop-blur p-4 sm:p-5"
              >
                <Cpu className="h-4 w-4 text-primary mb-3" aria-hidden="true" />
                <div className="text-sm font-medium text-foreground/90">{s}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DDD */}
      <section
        id="ddd"
        aria-labelledby="ddd-heading"
        className="section-pad border-t border-border/60 scroll-mt-32"
      >
        <div className="container max-w-4xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              03 · Citizen Participation
            </p>
            <h2 id="ddd-heading" className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Direct Digital Democracy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Representative politics is replaced by direct voting through secure digital identity.
              Participation becomes continuous rather than limited to periodic elections.
            </p>
          </div>
          <ol className="relative border-l border-border/80 ml-3 space-y-6 sm:space-y-8 list-none p-0">
            {dddSteps.map((s, i) => (
              <li key={s} className="pl-6 sm:pl-8 relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border border-primary/60 bg-background grid place-items-center text-[11px] font-semibold text-primary"
                >
                  {i + 1}
                </span>
                <span className="sr-only">Step {i + 1}:</span>
                <div className="text-base md:text-lg text-foreground/90 leading-relaxed">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ECONOMY + UBI */}
      <section
        id="economy"
        aria-labelledby="economy-heading"
        className="section-pad border-t border-border/60 relative scroll-mt-32"
      >
        <h2 id="economy-heading" className="sr-only">
          Economy and Universal Basic Income
        </h2>
        <div className="container max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Factory className="h-7 w-7 text-primary mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              04 · Economic System
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              From Human Labor to Machine Productivity
            </h3>
            <p className="text-foreground/85 leading-relaxed mb-5">
              As AI and robotics increasingly perform physical and intellectual work, taxation
              shifts away from people and toward{" "}
              <strong className="text-foreground font-medium">automated production</strong>. Humans
              become tax-free; machine productivity finances public services.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
              {taxTargets.map(({ i: Icon, t }) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-md border border-border/70 bg-background/40 p-3"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs md:text-sm text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Wallet className="h-7 w-7 text-accent mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              05 · Technology Dividend
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Universal Basic Income</h3>
            <p className="text-foreground/85 leading-relaxed mb-5">
              UBI is funded through a technology tax rather than redistribution between workers.
              Automation creates enormous economic value shared equally among all people.
            </p>
            <ul className="space-y-2 text-sm text-foreground/90 list-none p-0">
              {ubiGoals.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-4 w-4 text-accent mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* SOCIETY / HUMAN ROLE */}
      <section
        id="society"
        aria-labelledby="society-heading"
        className="section-pad border-t border-border/60 scroll-mt-32"
      >
        <h2 id="society-heading" className="sr-only">
          Post-Scarcity Society and the Human Role
        </h2>
        <div className="container max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Sparkles className="h-7 w-7 text-primary mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              06 · Production on Demand
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Post-Scarcity Economy</h3>
            <p className="text-foreground/85 leading-relaxed">
              Advanced manufacturing, AI-assisted design, robotics, nanotechnology and potentially
              molecular manufacturing enable{" "}
              <strong className="text-foreground font-medium">
                production whenever and wherever goods are needed
              </strong>
              . Products are manufactured on demand — minimizing waste and logistical complexity.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Rocket className="h-7 w-7 text-accent mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              07 · Human Role
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Creativity Becomes Central</h3>
            <p className="text-foreground/85 leading-relaxed mb-5">
              Although machines perform most routine work, humans remain the primary source of:
            </p>
            <ul className="flex flex-wrap gap-2 list-none p-0">
              {humanRoles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs text-foreground/90"
                >
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-foreground/90 font-medium border-l-2 border-accent/60 pl-5 mt-6">
              The goal is not to replace humanity, but to free people from compulsory labor.
            </p>
          </article>
        </div>
      </section>

      {/* SCIENCE + GOVERNANCE */}
      <section
        id="science"
        aria-labelledby="science-heading"
        className="section-pad border-t border-border/60 relative scroll-mt-32"
      >
        <h2 id="science-heading" className="sr-only">
          Science, Medicine and Global Governance
        </h2>
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <HeartPulse className="h-7 w-7 text-primary mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              08 · Science & Medicine
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Technological Progress</h3>
            <ul className="space-y-2 text-sm text-foreground/90 mb-4 list-none p-0">
              {medicineAdvances.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-4 w-4 text-primary mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Expected to improve quality of life, reduce many diseases and extend healthy
              lifespans.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Globe2 className="h-7 w-7 text-accent mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              09 · Global Governance
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Worldwide Coordination</h3>
            <p className="text-foreground/85 leading-relaxed mb-5">
              Earth functions as a unified administrative system rather than a collection of
              competing nation-states.
            </p>
            <ul className="space-y-2 text-sm text-foreground/90 list-none p-0">
              {globalObjectives.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-4 w-4 text-accent mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* TRANSPARENCY + LEGAL */}
      <section
        aria-labelledby="transparency-heading"
        className="section-pad border-t border-border/60"
      >
        <h2 id="transparency-heading" className="sr-only">
          Transparency and Legal Foundation
        </h2>
        <div className="container max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Eye className="h-7 w-7 text-primary mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              10 · Open Scientific Development
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Transparency</h3>
            <p className="text-foreground/85 leading-relaxed">
              Research and technological development operate with{" "}
              <strong className="text-foreground font-medium">
                high levels of transparency
              </strong>{" "}
              to ensure that advanced technologies benefit humanity and reduce opportunities for
              corruption or misuse.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 md:p-10 card-hover">
            <Scale className="h-7 w-7 text-accent mb-5" aria-hidden="true" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              12 · Legal Foundation
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              <a
                href="/juridical-singularity.html"
                className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                Juridical Singularity
              </a>
            </h3>
            <p className="text-foreground/85 leading-relaxed">
              The constitutional basis is the{" "}
              <strong className="text-foreground font-medium">Juridical Singularity</strong>,
              linked to the{" "}
              <strong className="text-foreground font-medium">
                World Succession Deed 1400/98
              </strong>{" "}
              — a unified legal order intended to support a global transition toward Electric
              Technocracy and worldwide governance.
            </p>
          </article>
        </div>
      </section>

      {/* ETHICS */}
      <section
        id="ethics"
        aria-labelledby="ethics-heading"
        className="section-pad border-t border-border/60 relative scroll-mt-32"
      >
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              11 · Foundations
            </p>
            <h2 id="ethics-heading" className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Ethical Principles
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 list-none p-0">
            {ethics.map((e, i) => (
              <li
                key={e}
                className="rounded-lg border border-border bg-card/60 backdrop-blur p-5 card-hover"
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                  Principle 0{i + 1}
                </p>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed font-medium">
                  {e}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        aria-labelledby="vision-heading"
        className="section-pad border-t border-border/60 relative scroll-mt-32"
      >
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              13 · Vision for the Future
            </p>
            <h2 id="vision-heading" className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              The Civilization Stack
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Technology performs most productive work while humans are free to pursue knowledge,
              creativity, innovation and personal fulfillment.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none p-0">
            {vision.map(({ i: Icon, t }) => (
              <li
                key={t}
                className="group card-hover rounded-xl border border-border bg-card/60 backdrop-blur p-4 sm:p-5 flex items-center gap-4"
              >
                <span
                  aria-hidden="true"
                  className="h-10 w-10 rounded-md border border-primary/30 bg-primary/10 grid place-items-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors shrink-0"
                >
                  <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </span>
                <span className="text-sm font-medium text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SHARE */}
      <section className="pb-20 sm:pb-24" aria-label="Share">
        <div className="container max-w-3xl px-4 sm:px-6">
          <ShareButtons url={PATH} title={TITLE} />
          <p className="mt-8 pt-8 border-t border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Singularity University · KdK Krzb. · Editorial Board
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
};

export default ElectricTechnocracy;

import { useEffect } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ShareButtons } from "@/components/site/ShareButtons";
import { BackToTop } from "@/components/site/BackToTop";
import {
  Zap,
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
} from "lucide-react";

const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  (typeof window !== "undefined" ? window.location.origin : "");

const PATH = "/electric-technocracy.html";
const TITLE = "Electric Technocracy · Singularity University";
const DESCRIPTION =
  "Electric Technocracy: a peaceful, automated civilization governed through ASI analysis, Direct Digital Democracy and a technology dividend that frees humans from compulsory labor.";

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

const ElectricTechnocracy = () => {
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
    <main className="min-h-dvh bg-background">
      <Nav />

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
            Doctrine II · Academy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-8 text-gradient">
            Electric Technocracy
          </h1>
          <p className="text-lg md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
            A governance model for a future in which{" "}
            <span className="text-foreground font-medium">AI, ASI, robotics and automation</span>{" "}
            drive economic production and public administration — a peaceful, highly automated
            civilization where humans are freed from compulsory labor.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "ASI", v: "Analytical Core" },
              { k: "DDD", v: "Direct Digital Democracy" },
              { k: "UBI", v: "Technology Dividend" },
              { k: "0%", v: "Tax on Humans" },
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

      {/* CORE PHILOSOPHY */}
      <section className="section-pad relative">
        <div className="container max-w-5xl grid md:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 card-hover">
            <Sparkles className="h-6 w-6 text-primary mb-4" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              01 · Purpose
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Core Philosophy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Replace traditional political systems with{" "}
              <span className="text-foreground font-medium">technology-supported governance</span>{" "}
              — decisions based on objective analysis, scientific evidence and direct public
              participation instead of party politics.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 card-hover">
            <Globe2 className="h-6 w-6 text-accent mb-4" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              Principle
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Shared Progress</h2>
            <p className="text-foreground/80 leading-relaxed">
              Technological progress should benefit all humanity equally rather than a limited
              number of individuals or institutions.
            </p>
          </article>
        </div>
      </section>

      {/* ASI — analytical core */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              02 · The Analytical Core
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Artificial Superintelligence
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
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
          <div className="grid grid-cols-2 gap-3">
            {asiSignals.map((s) => (
              <div
                key={s}
                className="card-hover rounded-lg border border-border bg-card/60 backdrop-blur p-5"
              >
                <Cpu className="h-4 w-4 text-primary mb-3" />
                <div className="text-sm font-medium text-foreground/90">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DDD — process timeline */}
      <section className="section-pad border-t border-border/60">
        <div className="container max-w-4xl">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              03 · Citizen Participation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Direct Digital Democracy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Representative politics is replaced by direct voting through secure digital identity.
              Participation becomes continuous rather than limited to periodic elections.
            </p>
          </div>
          <ol className="relative border-l border-border/80 ml-3 space-y-8">
            {dddSteps.map((s, i) => (
              <li key={s} className="pl-8 relative">
                <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border border-primary/60 bg-background grid place-items-center text-[11px] font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="text-base md:text-lg text-foreground/90 leading-relaxed">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ECONOMY + UBI */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Factory className="h-7 w-7 text-primary mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              04 · Economic System
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              From Human Labor to Machine Productivity
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              As AI and robotics increasingly perform physical and intellectual work, taxation
              shifts away from people and toward{" "}
              <span className="text-foreground font-medium">automated production</span>. Humans
              become tax-free; machine productivity finances public services.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {taxTargets.map(({ i: Icon, t }) => (
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

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Wallet className="h-7 w-7 text-accent mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              05 · Technology Dividend
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Universal Basic Income</h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              UBI is funded through a technology tax rather than redistribution between workers.
              Automation creates enormous economic value shared equally among all people.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85">
              {ubiGoals.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* POST-SCARCITY + HUMAN ROLE */}
      <section className="section-pad border-t border-border/60">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Sparkles className="h-7 w-7 text-primary mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              06 · Production on Demand
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Post-Scarcity Economy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Advanced manufacturing, AI-assisted design, robotics, nanotechnology and potentially
              molecular manufacturing enable{" "}
              <span className="text-foreground font-medium">
                production whenever and wherever goods are needed
              </span>
              . Products are manufactured on demand — minimizing waste and logistical complexity.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Rocket className="h-7 w-7 text-accent mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              07 · Human Role
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Creativity Becomes Central</h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              Although machines perform most routine work, humans remain the primary source of:
            </p>
            <div className="flex flex-wrap gap-2">
              {humanRoles.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/85"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="text-foreground/90 font-medium border-l-2 border-accent/60 pl-5 mt-6">
              The goal is not to replace humanity, but to free people from compulsory labor.
            </p>
          </article>
        </div>
      </section>

      {/* MEDICINE + GLOBAL GOVERNANCE */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl grid lg:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <HeartPulse className="h-7 w-7 text-primary mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              08 · Science & Medicine
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Technological Progress</h2>
            <ul className="space-y-2 text-sm text-foreground/85 mb-4">
              {medicineAdvances.map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/75 text-sm leading-relaxed">
              Expected to improve quality of life, reduce many diseases and extend healthy
              lifespans.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Globe2 className="h-7 w-7 text-accent mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              09 · Global Governance
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Worldwide Coordination</h2>
            <p className="text-foreground/80 leading-relaxed mb-5">
              Earth functions as a unified administrative system rather than a collection of
              competing nation-states.
            </p>
            <ul className="space-y-2 text-sm text-foreground/85">
              {globalObjectives.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* TRANSPARENCY + LEGAL FOUNDATION */}
      <section className="section-pad border-t border-border/60">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-10">
          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Eye className="h-7 w-7 text-primary mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              10 · Open Scientific Development
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Transparency</h2>
            <p className="text-foreground/80 leading-relaxed">
              Research and technological development operate with{" "}
              <span className="text-foreground font-medium">high levels of transparency</span> to
              ensure that advanced technologies benefit humanity and reduce opportunities for
              corruption or misuse.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 card-hover">
            <Scale className="h-7 w-7 text-accent mb-5" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              12 · Legal Foundation
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Juridical Singularity</h2>
            <p className="text-foreground/80 leading-relaxed">
              The constitutional basis is the{" "}
              <span className="text-foreground font-medium">Juridical Singularity</span>, linked to
              the <span className="text-foreground font-medium">World Succession Deed 1400/98</span>{" "}
              — a unified legal order intended to support a global transition toward Electric
              Technocracy and worldwide governance.
            </p>
          </article>
        </div>
      </section>

      {/* ETHICAL PRINCIPLES */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="container max-w-5xl">
          <div className="max-w-2xl mb-12">
            <div className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              11 · Foundations
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Ethical Principles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ethics.map((e, i) => (
              <div
                key={e}
                className="rounded-lg border border-border bg-card/60 backdrop-blur p-5 card-hover"
              >
                <div className="text-[10px] tracking-[0.25em] uppercase text-accent mb-2">
                  Principle 0{i + 1}
                </div>
                <div className="text-sm md:text-base text-foreground/90 leading-relaxed font-medium">
                  {e}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section-pad border-t border-border/60 relative">
        <div className="absolute inset-0 grid-bg opacity-10" aria-hidden="true" />
        <div className="container relative max-w-6xl">
          <div className="max-w-2xl mb-14">
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
              13 · Vision for the Future
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              The Civilization Stack
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Technology performs most productive work while humans are free to pursue knowledge,
              creativity, innovation and personal fulfillment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vision.map(({ i: Icon, t }) => (
              <div
                key={t}
                className="group card-hover rounded-xl border border-border bg-card/60 backdrop-blur p-5 flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-md border border-primary/30 bg-primary/10 grid place-items-center group-hover:bg-accent/10 group-hover:border-accent/40 transition-colors shrink-0">
                  <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="text-sm font-medium text-foreground/90">{t}</div>
              </div>
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

      <Footer />
      <BackToTop />
    </main>
  );
};

export default ElectricTechnocracy;

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { PageShell, SectionTitle } from "@/components/portfolio/PageShell";
import wavImg from "@/assets/portfolio/filtragenum.png";
import thermoImg from "@/assets/portfolio/thermo.jpg";
import robotImg from "@/assets/portfolio/Temp.jpg";
import ssiImg from "@/assets/portfolio/SSI.jpg";
import nasImg from "@/assets/portfolio/nas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mathéo Caro — Portfolio GEII / AII" },
      { name: "description", content: "Étudiant BUT 2 GEII parcours AII. Projets en automatisme, FPGA, Python, traitement du signal et systèmes embarqués." },
      { property: "og:title", content: "Mathéo Caro — Portfolio GEII / AII" },
      { property: "og:description", content: "Engineering portfolio: automation, embedded systems, FPGA, signal processing." },
    ],
  }),
  component: Index,
});

type ProjectKey = "wav" | "thermo" | "robot" | "nas";
type TabKey = "but1" | "but2" | "personal";

const projectImages: Record<ProjectKey, string> = {
  wav: wavImg,
  thermo: thermoImg,
  robot: robotImg,
  nas: nasImg,
};

const projectFit: Record<ProjectKey, string> = {
  wav: "object-contain bg-surface p-4",
  thermo: "object-cover",
  robot: "object-cover",
  nas: "object-cover",
};

const projectsByTab: Record<TabKey, ProjectKey[]> = {
  but1: ["thermo", "robot"],
  but2: ["wav"],
  personal: ["nas"],
};

function Stat({ value, label, accent }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className={`glass card-glow rounded-2xl p-6 ${accent ? "ring-1 ring-primary/30" : ""}`}>
      <p className={`font-display font-bold text-3xl md:text-4xl ${accent ? "text-gradient" : "text-foreground"}`}>
        {value}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}

function Index() {
  const { t } = useLocale();
  const home = t.home;
  const [tab, setTab] = useState<TabKey>("but2");
  const isEn = t.nav.home === "Home";

  const tabs: { key: TabKey; label: string; sub: string }[] = [
    { key: "but1", label: "BUT 1", sub: isEn ? "1st year" : "1ʳᵉ année" },
    { key: "but2", label: "BUT 2", sub: isEn ? "2nd year" : "2ᵉ année" },
    { key: "personal", label: isEn ? "Personal" : "Personnel", sub: isEn ? "Side projects" : "Hors-cursus" },
  ];

  const activeKeys = projectsByTab[tab];

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative">
        <SectionTitle eyebrow={home.eyebrow} title={home.title} accent={home.titleAccent} />
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {home.intro}
        </p>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat value={home.statProjects} label={home.statProjectsLabel} accent />
          <Stat value={home.statSemesters} label={home.statSemestersLabel} />
          <Stat value={home.statSpecialty} label={home.statSpecialtyLabel} accent />
          <Stat value={home.statLangs} label={home.statLangsLabel} />
        </div>
      </section>

      {/* Projects */}
      <section className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">{home.sectionProjects}</h2>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground hidden sm:block">
            {home.sectionProjectsHint}
          </span>
        </div>

        {/* Tabs */}
        <div role="tablist" aria-label="Project timeline" className="glass rounded-xl p-1.5 inline-flex flex-wrap gap-1 mb-8">
          {tabs.map((tb) => {
            const active = tab === tb.key;
            return (
              <button
                key={tb.key}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(tb.key)}
                className={`relative px-4 sm:px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-lg bg-primary shadow-[var(--shadow-glow)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative flex items-baseline gap-1.5">
                  <span className="font-display font-semibold">{tb.label}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${active ? "text-primary-foreground/80" : "text-muted-foreground/70"}`}>
                    {tb.sub}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {activeKeys.length === 0 ? (
              <div className="glass card-glow rounded-2xl p-10 md:p-14 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {isEn ? "Personal projects — coming soon" : "Projets personnels — bientôt"}
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  {isEn
                    ? "Side experiments built outside the curriculum will land here. Stay tuned."
                    : "Des expérimentations menées en dehors du cursus seront publiées ici prochainement."}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeKeys.map((key, i) => {
                  const p = t.projects.items[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.45 }}
                    >
                      <Link
                        to="/projects/$slug"
                        params={{ slug: key }}
                        className="group block glass card-glow rounded-2xl overflow-hidden h-full"
                      >
                        <div className="aspect-[16/10] overflow-hidden bg-surface relative">
                          <img
                            src={projectImages[key]}
                            alt={p.title}
                            loading="lazy"
                            className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${projectFit[key]}`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.teaser}</p>
                          <div className="mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary">
                            {home.seeProject}
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* About */}
      <section className="mt-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">{home.sectionAbout}</h2>
          <p className="text-muted-foreground leading-relaxed">{home.aboutP1}</p>
          <p className="text-muted-foreground leading-relaxed">{home.aboutP2}</p>

          <div className="pt-4 flex flex-wrap gap-3">
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all"
            >
              {t.nav.cv}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface/40 text-foreground text-sm font-medium hover:border-primary/50 transition-all"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">
            {home.hobbiesTitle}
          </p>
          <ul className="space-y-2.5 mb-5">
            {home.hobbies.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm text-foreground/80">
                <span className="w-1 h-1 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
          <div className="rounded-xl overflow-hidden border border-border bg-surface/40 aspect-square flex items-center justify-center p-3">
            <img
              src={ssiImg}
              alt="SSI Junior Diver certification"
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { PageShell, SectionTitle } from "@/components/portfolio/PageShell";
import wavImg from "@/assets/portfolio/filtragenum.png";
import thermoImg from "@/assets/portfolio/thermo.jpg";
import robotImg from "@/assets/portfolio/Temp.jpg";
import ssiImg from "@/assets/portfolio/SSI.jpg";

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

const PROJECT_KEYS = ["wav", "thermo", "robot"] as const;
const projectImages: Record<(typeof PROJECT_KEYS)[number], string> = {
  wav: wavImg,
  thermo: thermoImg,
  robot: robotImg,
};

const projectFit: Record<(typeof PROJECT_KEYS)[number], string> = {
  wav: "object-contain bg-surface p-4",
  thermo: "object-cover",
  robot: "object-cover",
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
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">{home.sectionProjects}</h2>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground hidden sm:block">
            {home.sectionProjectsHint}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECT_KEYS.map((key, i) => {
            const p = t.projects.items[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
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

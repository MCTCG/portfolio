import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";
import { PageShell } from "@/components/portfolio/PageShell";
import { ArrowLeft } from "lucide-react";
import { dict } from "@/i18n/content";

const VALID = ["wav", "thermo", "robot"] as const;
type Slug = (typeof VALID)[number];

const projectImages: Record<Slug, string> = {
  wav: "https://mctcg.github.io/Portfolio-Page/Wav.jpg",
  thermo: "https://mctcg.github.io/Portfolio-Page/Thermo.jpg",
  robot: "https://mctcg.github.io/Portfolio-Page/Robot.jpg",
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    if (!(VALID as readonly string[]).includes(params.slug)) {
      throw notFound();
    }
    return { slug: params.slug as Slug };
  },
  head: ({ params }) => {
    const slug = params.slug as Slug;
    const p = dict.fr.projects.items[slug];
    return {
      meta: [
        { title: `${p?.title ?? "Project"} — Mathéo Caro` },
        { name: "description", content: p?.teaser ?? "Engineering project by Mathéo Caro." },
        { property: "og:title", content: `${p?.title ?? "Project"} — Mathéo Caro` },
        { property: "og:description", content: p?.teaser ?? "" },
        ...(VALID.includes(slug) ? [{ property: "og:image", content: projectImages[slug] }] : []),
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <PageShell>
      <h1 className="font-display text-3xl">404 — Project not found</h1>
      <Link to="/" className="text-primary hover:underline mt-4 inline-block">← Home</Link>
    </PageShell>
  ),
});

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const { t } = useLocale();
  const p = t.projects.items[slug];

  return (
    <PageShell>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> {t.projects.backToProjects}
      </Link>

      <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">{p.tagline}</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold leading-[1.05] text-foreground">
        {p.title}
      </h1>

      {/* Hero image */}
      <div className="mt-8 glass rounded-2xl overflow-hidden">
        <div className="aspect-[16/9] relative">
          <img
            src={projectImages[slug]}
            alt={p.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Objectives + Tech */}
      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass rounded-2xl p-7">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">{t.projects.objectives}</p>
          <ul className="space-y-3">
            {p.objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 text-foreground/90">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-7">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">{t.projects.technologies}</p>
          <div className="flex flex-wrap gap-2">
            {p.tech.map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-primary/10 border border-primary/20 text-foreground/90">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-12 glass rounded-2xl p-7 lg:p-10">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">{t.projects.implementation}</p>
        <p className="text-foreground/85 leading-relaxed text-base lg:text-lg whitespace-pre-line">
          {p.body}
        </p>
      </div>

      <div className="mt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {t.projects.backToProjects}
        </Link>
      </div>
    </PageShell>
  );
}
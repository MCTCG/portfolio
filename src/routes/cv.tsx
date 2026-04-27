import { createFileRoute } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";
import { PageShell, SectionTitle } from "@/components/portfolio/PageShell";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Mathéo Caro" },
      { name: "description", content: "Parcours académique, compétences techniques et expériences de Mathéo Caro, étudiant BUT 2 GEII / AII." },
      { property: "og:title", content: "Mathéo Caro — CV & Profil académique" },
      { property: "og:description", content: "Education, technical skills, and experience of an electrical & industrial computing student." },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  const { t } = useLocale();
  const cv = t.cv;

  return (
    <PageShell>
      <SectionTitle eyebrow="CV / Resume" title={cv.title} />

      <div className="mt-12 grid lg:grid-cols-3 gap-6">
        {/* Profile card */}
        <div className="lg:col-span-2 glass rounded-2xl p-7 space-y-4">
          <h2 className="text-xl font-display font-semibold">{cv.subtitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{cv.profileText}</p>
          <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm">
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {cv.age}
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {cv.availability}
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {cv.license}
            </div>
          </div>
        </div>

        {/* Contact mini */}
        <div className="glass rounded-2xl p-6 space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">{cv.contact}</p>
          <div className="space-y-3 text-sm">
            <a href="mailto:matcarouniversities@gmail.com" className="flex items-center gap-2.5 text-foreground/90 hover:text-primary transition-colors break-all">
              <Mail className="w-4 h-4 text-primary shrink-0" /> matcarouniversities@gmail.com
            </a>
            <a href="mailto:matheo.caro.area@gmail.com" className="flex items-center gap-2.5 text-foreground/90 hover:text-primary transition-colors break-all">
              <Mail className="w-4 h-4 text-primary shrink-0" /> matheo.caro.area@gmail.com
            </a>
            <a href="tel:+33775766432" className="flex items-center gap-2.5 text-foreground/90 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" /> +33 7 75 76 64 32
            </a>
            <p className="flex items-center gap-2.5 text-foreground/90">
              <MapPin className="w-4 h-4 text-primary shrink-0" /> Vélizy-Villacoublay
            </p>
          </div>
        </div>
      </div>

      {/* Languages + Qualities */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-2xl p-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">{cv.languages}</p>
          <ul className="space-y-2 text-sm text-foreground/85">
            <li>Anglais — C2 (TOEFL 107/120)</li>
            <li>Espagnol — C2</li>
            <li>Français — C1</li>
          </ul>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">{cv.qualities}</p>
          <div className="flex flex-wrap gap-2">
            {cv.qualitiesList.map((q) => (
              <span key={q} className="px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 text-foreground/90">
                {q}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education timeline */}
      <h2 className="mt-16 mb-6 text-2xl font-display font-semibold">{cv.education}</h2>
      <div className="space-y-4">
        {cv.eduItems.map((item) => (
          <div key={item.title + item.date} className="glass card-glow rounded-xl p-5 grid md:grid-cols-[160px_1fr] gap-4">
            <p className="text-xs font-mono uppercase tracking-wider text-primary">{item.date}</p>
            <div>
              <p className="font-display font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.school}</p>
              {item.note && <p className="text-xs text-muted-foreground mt-1 italic">{item.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <h2 className="mt-16 mb-6 text-2xl font-display font-semibold">{cv.experience}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {cv.expItems.map((e) => (
          <div key={e.title} className="glass rounded-xl p-5">
            <p className="font-display font-semibold text-foreground">{e.title}</p>
            <p className="text-sm text-muted-foreground mt-1">{e.company}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 className="mt-16 mb-6 text-2xl font-display font-semibold">{cv.skills}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cv.skillsGroups.map((g) => (
          <div key={g.title} className="glass card-glow rounded-xl p-5">
            <p className="text-sm font-display font-semibold text-primary mb-3">{g.title}</p>
            <ul className="space-y-1.5 text-sm text-foreground/85">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* University projects */}
      <h2 className="mt-16 mb-6 text-2xl font-display font-semibold">{cv.universityProjects}</h2>
      {(["BUT 1", "BUT 2"] as const).map((y) => (
        <div key={y} className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">{y}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cv.uniProjects.filter((p) => p.year === y).map((p) => (
              <div key={p.title} className="glass rounded-xl p-5">
                <p className="text-xs font-mono text-muted-foreground">{p.date}</p>
                <p className="mt-1 font-display font-semibold text-foreground">{p.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </PageShell>
  );
}
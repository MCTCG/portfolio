import { createFileRoute, Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/LocaleContext";
import { PageShell, SectionTitle } from "@/components/portfolio/PageShell";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mathéo Caro" },
      { name: "description", content: "Contactez Mathéo Caro pour un stage en GEII / AII — automatisme, FPGA, embedded." },
      { property: "og:title", content: "Mathéo Caro — Contact" },
      { property: "og:description", content: "Available for an engineering internship from April 2025." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLocale();
  const c = t.contact;
  return (
    <PageShell>
      <SectionTitle eyebrow="Contact" title={c.title} />
      <p className="mt-6 text-lg text-muted-foreground">{c.subtitle}</p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        <a
          href="mailto:matcarouniversities@gmail.com"
          className="glass card-glow rounded-2xl p-7 group flex flex-col gap-3"
        >
          <Mail className="w-7 h-7 text-primary" />
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Email</p>
          <p className="font-display font-semibold text-foreground break-all group-hover:text-primary transition-colors">
            matcarouniversities@gmail.com
          </p>
          <p className="text-sm text-muted-foreground break-all">matheo.caro.area@gmail.com</p>
        </a>

        <a
          href="tel:+33775766432"
          className="glass card-glow rounded-2xl p-7 group flex flex-col gap-3"
        >
          <Phone className="w-7 h-7 text-primary" />
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">{c.phone.split(" ")[0] === "+33" ? "Phone" : "Phone"}</p>
          <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {c.phone}
          </p>
          <p className="text-sm text-muted-foreground">🇫🇷 France</p>
        </a>

        <div className="glass rounded-2xl p-7 flex flex-col gap-3 md:col-span-2">
          <MapPin className="w-7 h-7 text-primary" />
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Location</p>
          <p className="font-display font-semibold text-foreground">{c.location}</p>
        </div>
      </div>

      <div className="mt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {c.backHome}
        </Link>
      </div>
    </PageShell>
  );
}
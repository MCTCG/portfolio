import { Link, useRouterState } from "@tanstack/react-router";
import { Home, FileText, Mail, Download, Globe } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Sidebar() {
  const { t, locale, setLocale } = useLocale();
  const { location } = useRouterState();

  const links = [
    { to: "/", label: t.nav.home, icon: Home, exact: true },
    { to: "/cv", label: t.nav.cv, icon: FileText },
    { to: "/contact", label: t.nav.contact, icon: Mail },
  ] as const;

  const isActive = (to: string, exact?: boolean) =>
    exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <aside className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-r lg:border-border bg-sidebar/60 backdrop-blur-xl z-30 lg:flex lg:flex-col">
      <div className="flex flex-col h-full p-6 gap-8">
        {/* Identity */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg ring-2 ring-primary/40">
              MC
            </div>
          </div>
          <div>
            <p className="font-display font-semibold text-foreground leading-tight">Mathéo Caro</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-mono">
              {t.nav.role}
            </p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {links.map(({ to, label, icon: Icon, exact }) => {
            const active = isActive(to, exact);
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/60",
                )}
              >
                {active && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className="relative w-4 h-4" />
                <span className="relative">{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex-1" />

        {/* Locale toggle */}
        <div className="flex items-center gap-2 p-1 rounded-full bg-sidebar-accent/50 border border-border self-start">
          <Globe className="w-3.5 h-3.5 text-muted-foreground ml-2" />
          {(["fr", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all",
                locale === l
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-label={`Switch language to ${l}`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* CV Download */}
        <a
          href="/CV-Matheo-Caro.pdf"
          download
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
        >
          <span className="text-sm font-medium text-foreground">{t.nav.downloadCv}</span>
          <Download className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </aside>
  );
}
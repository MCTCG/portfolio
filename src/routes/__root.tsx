import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { Sidebar } from "@/components/portfolio/Sidebar";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="text-7xl font-display font-bold text-gradient">404</h1>
        <h2 className="text-xl font-display text-foreground">Page introuvable / Page not found</h2>
        <p className="text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-glow)]"
        >
          ← Retour
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mathéo Caro — Portfolio GEII / AII" },
      { name: "description", content: "Étudiant BUT 2 GEII parcours AII — projets en automatisme, systèmes embarqués, FPGA et traitement du signal." },
      { name: "author", content: "Mathéo Caro" },
      { property: "og:title", content: "Mathéo Caro — Portfolio GEII / AII" },
      { property: "og:description", content: "Engineering portfolio: automation, embedded systems, FPGA, signal processing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LocaleProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="hero-aurora" />
        </div>

        <Sidebar />

        <main className="lg:pl-72 min-h-screen relative">
          <Outlet />
          <footer className="px-6 lg:px-12 py-8 text-center text-xs text-muted-foreground font-mono">
            <span className="opacity-70">© Mathéo Caro · GEII / AII</span>
          </footer>
        </main>
      </div>
    </LocaleProvider>
  );
}
}

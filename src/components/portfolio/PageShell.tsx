import { motion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-16"
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({ eyebrow, title, accent }: { eyebrow?: string; title: string; accent?: string }) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] text-foreground">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h1>
    </div>
  );
}
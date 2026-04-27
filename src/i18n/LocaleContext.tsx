import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, type Locale, LOCALES } from "./content";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof dict)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "mc-portfolio-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (LOCALES as string[]).includes(stored)) {
      setLocaleState(stored as Locale);
      return;
    }
    const browser = navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
    setLocaleState(browser);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
  };

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dict[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
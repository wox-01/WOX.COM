"use client";

import { useLanguage } from "@/lib/i18n";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex h-11 items-center gap-0.5 rounded-full border border-border bg-white/[0.03] p-1.5 font-mono text-xs">
      {(["tr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          data-cursor-hover
          aria-pressed={lang === l}
          className={`flex h-full items-center rounded-full px-3 uppercase transition-colors ${
            lang === l ? "bg-white/10 text-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

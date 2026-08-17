"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/lib/i18n";

export default function InteractiveQA({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const { qa } = useContent().ui;
  const [active, setActive] = useState<number | null>(null);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (active === null) return;
    setChars(0);
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const answer = items[active].answer;
    if (chars >= answer.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(answer.length);
      return;
    }

    const id = setTimeout(() => setChars((c) => c + 1), 14);
    return () => clearTimeout(id);
  }, [active, chars, items]);

  return (
    <div>
      <span className="mb-3 block font-mono text-xs tracking-widest text-muted">
        {qa.label}
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <button
            key={item.question}
            type="button"
            onClick={() => setActive(i)}
            data-cursor-hover
            className="rounded-full border px-3 py-1 font-mono text-xs transition-colors"
            style={{
              borderColor: active === i ? "var(--foreground)" : "var(--border)",
              color: active === i ? "var(--foreground)" : "var(--muted)",
            }}
          >
            {item.question}
          </button>
        ))}
      </div>

      <div
        className="mt-4 min-h-[110px] rounded-xl border border-border bg-white/[0.02] p-4 font-mono text-sm leading-relaxed"
        style={{ opacity: active === null ? 0.5 : 1, transition: "opacity 0.3s ease" }}
      >
        {active === null ? (
          <span className="text-muted">{qa.placeholder}</span>
        ) : (
          <p className="text-foreground/90">
            {items[active].answer.slice(0, chars)}
            {chars < items[active].answer.length && (
              <span className="animate-pulse text-foreground/50">▍</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

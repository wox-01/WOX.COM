"use client";

import { useEffect, useRef, useState } from "react";

const TEXT_CLASSES =
  "text-center font-display text-3xl font-semibold leading-snug tracking-tight sm:text-5xl lg:text-6xl";

export default function TypewriterText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    setCount(0);
    started.current = false;
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let interval = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        let i = 0;
        interval = window.setInterval(() => {
          i += 1;
          setCount(i);
          if (i >= text.length) window.clearInterval(interval);
        }, 32);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, [text]);

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* Reserves the final layout space upfront so typing never shifts the page. */}
      <p aria-hidden className={`invisible ${TEXT_CLASSES}`}>
        {text}
      </p>
      <p className={`absolute inset-0 text-foreground ${TEXT_CLASSES}`}>
        <span className="animate-blink-caret border-r-2 border-foreground pr-0.5">
          {text.slice(0, count)}
        </span>
      </p>
    </div>
  );
}

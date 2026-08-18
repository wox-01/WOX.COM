"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/i18n";

export default function CategorySlider() {
  const { slider } = useContent().ui;
  const SLIDES = [
    { href: "/web", shape: "/WOX.COM/shape-1.webp", ...slider.web },
    { href: "/mobil", shape: "/WOX.COM/shape-2.webp", ...slider.mobile },
  ];
  const [[index, dir], setIndex] = useState([0, 0]);
  const slide = SLIDES[index];

  function go(next: number, direction: number) {
    setIndex([(next + SLIDES.length) % SLIDES.length, direction]);
  }

  return (
    <section className="relative min-h-screen overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-8 z-20 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.href}
            type="button"
            onClick={() => go(i, i > index ? 1 : -1)}
            data-cursor-hover
            className="pointer-events-auto h-1.5 rounded-full bg-white/20 transition-all duration-300"
            style={{ width: i === index ? 28 : 8, background: i === index ? "white" : undefined }}
            aria-label={s.title}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1, -1)}
        data-cursor-hover
        aria-label="Önceki"
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground sm:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1, 1)}
        data-cursor-hover
        aria-label="Sonraki"
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence mode="wait" initial={false} custom={dir}>
        <motion.div
          key={slide.href}
          custom={dir}
          initial={{ x: dir >= 0 ? "8%" : "-8%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: dir >= 0 ? "-8%" : "8%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col justify-end px-6 py-16 sm:px-12 lg:px-24"
        >
          <div className="pointer-events-none absolute -left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 opacity-40 blur-2xl sm:h-[800px] sm:w-[800px]">
            <Image src={slide.shape} alt="" fill className="object-contain" />
          </div>

          <h2 className="relative font-display text-[13vw] font-semibold leading-[0.95] tracking-tight sm:text-[7vw]">
            {slide.title}
          </h2>

          <div className="relative mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {slide.description}
            </p>
            <Link
              href={slide.href}
              data-cursor-hover
              data-cursor-text="Keşfet"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground/90 transition-colors duration-300 hover:border-foreground/40 hover:bg-white/[0.04]"
            >
              {slide.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

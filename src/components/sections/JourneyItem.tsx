"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/i18n";

export default function JourneyItem({
  date,
  title,
  description,
  current = false,
}: {
  date: string;
  title: string;
  description: string;
  current?: boolean;
}) {
  const { journey } = useContent().ui;

  return (
    <div className="relative pb-14 pl-8 last:pb-0 sm:pl-10">
      <span className="absolute -left-[4px] top-1 h-[9px] w-[9px] rounded-full border border-border bg-background sm:-left-[4px]" />

      <motion.div
        className="grid grid-cols-1 gap-1 sm:grid-cols-[100px_1fr] sm:gap-8"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-mono text-xs tracking-widest text-muted">
          {date}
          {current && <span className="ml-2 text-foreground/70">· {journey.now}</span>}
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

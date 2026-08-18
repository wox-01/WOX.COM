"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export default function TimelineProgress({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const height = useTransform(smoothProgress, (v) => `${Math.min(100, Math.max(0, v * 100))}%`);
  const dotOpacity = useTransform(smoothProgress, [0, 0.01, 0.99, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-0 top-0 h-full w-px bg-border" />
      <motion.div
        className="absolute left-0 top-0 w-px bg-foreground"
        style={{ height, boxShadow: "0 0 10px rgba(255,255,255,0.6)" }}
      />
      <motion.div
        className="absolute -left-[4px] h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-foreground"
        style={{ top: height, opacity: dotOpacity, boxShadow: "0 0 14px 3px rgba(255,255,255,0.7)" }}
      />
      {children}
    </div>
  );
}

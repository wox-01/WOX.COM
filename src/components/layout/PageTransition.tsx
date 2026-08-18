"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const RAY_COUNT = 72;

export default function PageTransition() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);

  const rays = useMemo(
    () =>
      Array.from({ length: RAY_COUNT }, (_, i) => {
        const angle = (360 / RAY_COUNT) * i * (Math.PI / 180);
        return {
          x1: 100 + Math.cos(angle) * 10,
          y1: 100 + Math.sin(angle) * 10,
          x2: 100 + Math.cos(angle) * 140,
          y2: 100 + Math.sin(angle) * 140,
        };
      }),
    []
  );

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setVisible(true);
    const t = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-background"
          aria-hidden
        >
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            preserveAspectRatio="xMidYMid slice"
          >
            {rays.map((r, i) => (
              <line
                key={i}
                x1={r.x1}
                y1={r.y1}
                x2={r.x2}
                y2={r.y2}
                stroke="var(--foreground)"
                strokeOpacity={0.16}
                strokeWidth={0.15}
              />
            ))}
          </motion.svg>

          <motion.span
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center font-display text-6xl font-semibold tracking-tight text-foreground sm:text-8xl"
          >
            WOX
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

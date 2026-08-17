"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
}

export default function ScrollRevealText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const words = text.split(" ");

  return (
    <div ref={ref} className="relative min-h-[220vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center px-6 sm:px-12 lg:px-24">
        <p className="max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </div>
  );
}

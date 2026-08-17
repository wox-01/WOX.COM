"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/i18n";

const TAGS = [
  "Next.js",
  "RAG",
  "Flutter",
  "FastAPI",
  "LLM",
  "Firebase",
  "PostgreSQL",
  "OpenAI",
  "AWS",
  "TypeScript",
];

export default function SkillOrbit() {
  const { hero } = useContent().ui;
  const ringRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(380);
  const [draggable, setDraggable] = useState(true);

  const rotY = useRef(0);
  const rotX = useRef(-8);
  const velY = useRef(0.06);
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => setSize(window.innerWidth < 640 ? 260 : 420);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    // coarse pointer (touch) devices: dragging this would eat the page's
    // scroll gesture, so it only auto-rotates there — no touch-action:none.
    setDraggable(!window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;

    const tick = () => {
      if (!dragging.current) {
        rotY.current += velY.current;
        velY.current *= 0.985;
        if (Math.abs(velY.current) < 0.06) velY.current = 0.06;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };
    rotY.current += dx * 0.4;
    rotX.current = Math.max(-45, Math.min(45, rotX.current - dy * 0.3));
    velY.current = dx * 0.4;
  }

  function onPointerUp() {
    dragging.current = false;
  }

  const radius = size * 0.42;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size, perspective: 900 }}
    >
      <div
        {...(draggable
          ? {
              onPointerDown,
              onPointerMove,
              onPointerUp,
              onPointerLeave: onPointerUp,
              "data-cursor-hover": true,
              "data-cursor-text": hero.drag,
            }
          : {})}
        className={`relative h-full w-full ${draggable ? "touch-none cursor-grab active:cursor-grabbing" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          ref={ringRef}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(-8deg) rotateY(0deg)" }}
        >
          {TAGS.map((tag, i) => {
            const angle = (360 / TAGS.length) * i;
            return (
              <div
                key={tag}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/85 px-4 py-2 font-mono text-xs text-foreground/90"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-full opacity-20 blur-2xl" style={{ background: "radial-gradient(circle, white, transparent 70%)" }} />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const hoverEl = el.closest<HTMLElement>("a, button, [data-cursor-hover]");
      setIsHovering(!!hoverEl);
      setLabel(hoverEl?.getAttribute("data-cursor-text") ?? null);
    };

    let raf = 0;
    const animate = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const expanded = isHovering && !!label;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden sm:block"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.2s ease" }}
      aria-hidden
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ opacity: expanded ? 0 : 1, transition: "opacity 0.2s ease" }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex items-center justify-center whitespace-nowrap rounded-full border border-white bg-black/40 backdrop-blur-sm transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: expanded ? "auto" : isHovering ? 48 : 28,
          height: expanded ? 40 : isHovering ? 48 : 28,
          padding: expanded ? "0 16px" : 0,
          opacity: isHovering ? 0.95 : 0.5,
        }}
      >
        {expanded && (
          <span className="font-mono text-xs text-white">{label}</span>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from "@/lib/data";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { useContent } from "@/lib/i18n";

export default function Menu() {
  const content = useContent();
  const LINKS = [
    { href: "/#top", label: content.ui.nav.start },
    { href: "/#about", label: content.ui.nav.about },
    { href: "/#projects", label: content.ui.nav.projects },
    { href: "/#contact", label: content.ui.nav.contact },
  ];
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        data-cursor-hover
        aria-label={open ? content.ui.nav.closeMenu : content.ui.nav.openMenu}
        className="relative z-[9997] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/[0.03] text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[9995] bg-background"
            style={{
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <nav className="flex flex-col gap-2 px-6 pt-32 sm:px-12 sm:pt-40 lg:px-24">
              {LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  data-cursor-hover
                  className="font-display text-5xl font-semibold tracking-tight text-foreground/90 transition-colors hover:text-foreground sm:text-7xl"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 100}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 100}ms`,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div
              className="absolute inset-x-0 bottom-0 flex flex-wrap gap-x-8 gap-y-2 px-6 py-8 font-mono text-sm text-muted sm:px-12 lg:px-24"
              style={{
                opacity: open ? 1 : 0,
                transition: "opacity 0.6s ease 300ms",
              }}
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" data-cursor-hover className="hover:text-foreground">
                GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" data-cursor-hover className="hover:text-foreground">
                LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`} data-cursor-hover className="hover:text-foreground">
                {EMAIL}
              </a>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

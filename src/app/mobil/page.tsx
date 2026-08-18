"use client";

import { useContent } from "@/lib/i18n";
import Nav from "@/components/layout/Nav";
import CategoryHero from "@/components/sections/CategoryHero";
import ProjectList from "@/components/sections/ProjectList";

export default function MobileProjectsPage() {
  const { ui, projects } = useContent();
  const mobileProjects = projects.filter((p) => p.category === "mobile");

  return (
    <main className="flex-1">
      <Nav />
      <CategoryHero title={ui.categoryHero.mobile} />
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <ProjectList projects={mobileProjects} />
      </section>
      <footer className="border-t border-border px-6 py-8 sm:px-12 lg:px-24">
        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} WOX</p>
      </footer>
    </main>
  );
}

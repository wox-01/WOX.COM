"use client";

import { useContent } from "@/lib/i18n";
import Nav from "@/components/Nav";
import CategoryHero from "@/components/CategoryHero";
import ProjectList from "@/components/ProjectList";
import ScrollRevealText from "@/components/ScrollRevealText";

export default function WebProjectsPage() {
  const { ui, projects } = useContent();
  const webProjects = projects.filter((p) => p.category === "web");

  return (
    <main className="flex-1">
      <Nav />
      <CategoryHero title={ui.categoryHero.web} showMockup />
      <ScrollRevealText text={ui.webStatement} />
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <ProjectList projects={webProjects} />
      </section>
      <footer className="border-t border-border px-6 py-8 sm:px-12 lg:px-24">
        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} WOX</p>
      </footer>
    </main>
  );
}

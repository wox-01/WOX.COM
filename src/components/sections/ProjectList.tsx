"use client";

import Reveal from "@/components/ui/Reveal";
import { WebIcon, MobileIcon, AiIcon } from "@/components/ui/icons";
import type { Project } from "@/lib/data";
import { useContent } from "@/lib/i18n";

const TYPE_ICONS: Record<Project["category"], typeof WebIcon> = {
  web: WebIcon,
  mobile: MobileIcon,
  ai: AiIcon,
};

export default function ProjectList({ projects }: { projects: Project[] }) {
  const { projectList } = useContent().ui;
  return (
    <div className="relative flex flex-col divide-y divide-border border-t border-border">
      {projects.map((project) => {
        const Wrapper = project.repo ? "a" : "div";
        const TypeIcon = TYPE_ICONS[project.category] ?? WebIcon;
        return (
          <Reveal key={project.name}>
            <Wrapper
              {...(project.repo
                ? {
                    href: project.repo,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-cursor-text": projectList.openProject,
                  }
                : {})}
              data-cursor-hover
              className="group flex flex-col gap-6 py-10 transition-colors duration-300 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-8 sm:py-12"
            >
              <span className="hidden shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground sm:flex sm:h-11 sm:w-11">
                <TypeIcon className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-muted">
                    {project.type}
                  </span>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/70">
                    {project.team}
                  </span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-foreground/70 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-x-1 sm:group-hover:opacity-100">
                <span>{project.repo ? projectList.viewProject : projectList.privateProject}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Wrapper>
          </Reveal>
        );
      })}
    </div>
  );
}

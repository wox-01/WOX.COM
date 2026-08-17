"use client";

import Image from "next/image";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/lib/data";
import { useContent } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import TiltImage from "@/components/TiltImage";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "@/components/icons";
import LiquidBlob from "@/components/LiquidBlob";
import DotGrid from "@/components/DotGrid";
import JourneyItem from "@/components/JourneyItem";
import TimelineProgress from "@/components/TimelineProgress";
import Counter from "@/components/Counter";
import CodeMockup from "@/components/CodeMockup";
import InteractiveQA from "@/components/InteractiveQA";
import ProjectList from "@/components/ProjectList";
import CategorySlider from "@/components/CategorySlider";

export default function Home() {
  const { ui, about, facts, journey, stats, qa, skills, projects } = useContent();

  return (
    <main className="flex-1">
      <Nav />
      {/* Hero */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32 sm:px-12 lg:px-24"
      >
        <LiquidBlob className="-left-1/4 top-1/4 h-[700px] w-[700px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
          <div
            className="w-[420px] sm:w-[680px] lg:w-[820px] [mask-image:linear-gradient(to_top,black_35%,transparent_92%)] [-webkit-mask-image:linear-gradient(to_top,black_35%,transparent_92%)]"
          >
            <Image src="/hero-imac.png" alt="WOX" width={1920} height={1440} className="h-auto w-full" />
          </div>
        </div>

        <div className="relative grid grid-cols-1 items-center gap-16 sm:grid-cols-2 sm:gap-12">
          <div className="fade-up">
            <p className="mb-5 font-mono text-sm tracking-widest text-foreground/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {ui.hero.name} — {ui.hero.eyebrow}
            </p>
            <h1 className="max-w-xl font-display text-4xl font-semibold leading-tight tracking-tight text-foreground drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:text-5xl">
              {ui.hero.headingPre}
              <br />
              {ui.hero.headingAccentPre}
              <span className="text-teal-300">{ui.hero.headingAccent}</span>
              {ui.hero.headingAccentPost}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              {ui.hero.sub}
            </p>
          </div>

          <div className="fade-up flex justify-center sm:justify-end" style={{ animationDelay: "150ms" }}>
            <CodeMockup />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative scroll-mt-20 overflow-hidden px-6 py-24 sm:px-12 lg:px-24">
        <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-12">
          <Reveal className="sm:col-span-7">
            <h2 className="mb-6 font-mono text-sm tracking-widest text-muted">
              {ui.about.eyebrow}
            </h2>
            <p className="max-w-2xl font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
              {about}
            </p>

            <dl className="mt-12 flex max-w-2xl flex-col divide-y divide-border border-t border-border">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <dt className="w-32 shrink-0 font-mono text-xs tracking-widest text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-foreground/90 sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="sm:col-span-5">
            <div className="flex flex-col items-start sm:items-end">
              <a
                href="/WOX.COM/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                data-cursor-text={ui.about.openPdf}
                className="w-full max-w-[280px]"
              >
                <TiltImage max={6}>
                  <Image
                    src="/cv-preview.png"
                    alt="CV"
                    width={927}
                    height={1200}
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </TiltImage>
              </a>

              <div className="mt-4 flex w-full max-w-[280px] items-center justify-between font-mono text-xs text-muted">
                <span>{ui.about.resumeLabel}</span>
                <Magnetic strength={0.4}>
                  <a
                    href="/WOX.COM/cv.pdf"
                    download
                    data-cursor-hover
                    data-cursor-text={ui.about.download}
                    className="group flex items-center gap-2 text-foreground/90 transition-colors hover:text-foreground"
                  >
                    {ui.about.downloadCv}
                    <DownloadIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="mb-3 font-mono text-sm tracking-widest text-muted">
                {ui.journey.eyebrow}
              </h2>
              <p className="max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                {ui.journey.heading}
              </p>
            </Reveal>

            <div className="mt-16">
              <TimelineProgress>
                {journey.map((item) => (
                  <JourneyItem
                    key={item.date + item.title}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    current={item.current}
                  />
                ))}
              </TimelineProgress>
            </div>
          </div>

          <Reveal delay={120} className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-semibold tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix ?? ""} />
                  </div>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <InteractiveQA items={qa} />
            </div>

            <div className="mt-14 flex flex-col gap-10">
              {skills.map((group) => (
                <div key={group.group}>
                  <span className="mb-3 block font-mono text-xs tracking-widest text-muted">
                    {group.group.toUpperCase()}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CategorySlider />

      {/* Projects */}
      <section id="projects" className="relative scroll-mt-20 overflow-hidden px-6 py-24 sm:px-12 lg:px-24">
        <DotGrid />
        <div className="relative mb-16 flex items-baseline justify-between">
          <h2 className="font-mono text-sm tracking-widest text-muted">
            {ui.projectsSection.eyebrow}
          </h2>
          <span className="font-mono text-xs text-muted">
            01 — {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <ProjectList projects={projects} />
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative flex min-h-[60vh] scroll-mt-20 flex-col justify-center overflow-hidden px-6 py-24 sm:px-12 lg:px-24"
      >
        <LiquidBlob className="-right-1/4 bottom-0 h-[500px] w-[500px]" opacity={0.16} />
        <Reveal className="relative">
          <h2 className="mb-8 font-mono text-sm tracking-widest text-muted">
            {ui.contact.eyebrow}
          </h2>
          <p className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {ui.contact.heading[0]}
            <br />
            {ui.contact.heading[1]}
          </p>

          <div className="mt-10 flex items-center gap-5">
            <Magnetic strength={0.5}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                data-cursor-text="GitHub"
                aria-label="GitHub"
                className="block text-foreground/80 transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-7 w-7" />
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                data-cursor-text="LinkedIn"
                aria-label="LinkedIn"
                className="block text-foreground/80 transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="h-7 w-7" />
              </a>
            </Magnetic>
            <Magnetic strength={0.5}>
              <a
                href={`mailto:${EMAIL}`}
                data-cursor-hover
                data-cursor-text="Mail"
                aria-label="Mail"
                className="block text-foreground/80 transition-colors hover:text-foreground"
              >
                <MailIcon className="h-7 w-7" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border px-6 py-10 sm:px-12 lg:px-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} WOX
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
            <a href="#about" data-cursor-hover className="transition-colors hover:text-foreground">
              {ui.nav.about}
            </a>
            <a href="#projects" data-cursor-hover className="transition-colors hover:text-foreground">
              {ui.nav.projects}
            </a>
            <a href="#contact" data-cursor-hover className="transition-colors hover:text-foreground">
              {ui.nav.contact}
            </a>
          </nav>
          <Magnetic strength={0.4}>
            <a
              href="#top"
              data-cursor-hover
              data-cursor-text={ui.nav.backToTop}
              className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-foreground"
            >
              {ui.nav.backToTop} ↑
            </a>
          </Magnetic>
        </div>
      </footer>
    </main>
  );
}

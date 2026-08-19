"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/lib/data";
import { useContent } from "@/lib/i18n";
import Nav from "@/components/layout/Nav";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import TiltImage from "@/components/ui/TiltImage";
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "@/components/ui/icons";
import LiquidBlob from "@/components/ui/LiquidBlob";
import DotGrid from "@/components/ui/DotGrid";
import JourneyItem from "@/components/sections/JourneyItem";
import TimelineProgress from "@/components/sections/TimelineProgress";
import Counter from "@/components/ui/Counter";
import InteractiveQA from "@/components/sections/InteractiveQA";
import ProjectList from "@/components/sections/ProjectList";
import CategorySlider from "@/components/sections/CategorySlider";
import TypewriterText from "@/components/sections/TypewriterText";
import ScrollRevealText from "@/components/sections/ScrollRevealText";
import HeroScene from "@/components/sections/HeroScene";

function subscribeDesktop(callback: () => void) {
  const mq = window.matchMedia("(min-width: 640px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 640px)").matches;
}

function getDesktopServerSnapshot() {
  return false;
}

export default function Home() {
  const { ui, about, facts, journey, stats, qa, skills, projects } = useContent();
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, getDesktopServerSnapshot);

  return (
    <main className="flex-1">
      <Nav />
      {/* Hero */}
      <div id="top">
        {/* Mobil: Mac fotoğrafı + isim */}
        <section className="relative flex flex-col items-center overflow-hidden bg-background px-6 pb-16 pt-32 text-center sm:hidden">
          <div className="fade-up relative z-10">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground">
              {ui.hero.name}
            </h1>
            <p className="mt-5 font-mono text-xs tracking-[0.3em] text-foreground/70">
              {ui.hero.eyebrow.toUpperCase()}
            </p>
          </div>

          <div className="fade-up mt-10 w-[78vw] max-w-[420px]" style={{ animationDelay: "120ms" }}>
            <Image
              src="/WOX.COM/hero-imac.webp"
              alt="WOX"
              width={1700}
              height={1275}
              priority
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Masaüstü: Spline sahnesi */}
        {isDesktop && (
          <section className="relative hidden h-dvh overflow-hidden bg-background sm:block">
            <HeroScene className="h-full w-full" />
          </section>
        )}
      </div>

      {/* About */}
      <section id="about" className="relative scroll-mt-20 overflow-hidden px-6 pb-24 pt-0 sm:px-12 sm:pt-36 lg:px-24">
        <div className="relative grid grid-cols-1 gap-16 sm:grid-cols-12 sm:items-center">
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
            <div className="flex flex-col items-center sm:items-end">
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
                    src="/WOX.COM/cv-preview.webp"
                    alt="CV"
                    width={600}
                    height={777}
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

      {/* Trust statement */}
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 sm:px-12 lg:px-24">
        <TypewriterText text={ui.trustStatement} />
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

      <ScrollRevealText text={ui.goalStatement} />

      {/* Projects banner */}
      <section className="relative overflow-hidden py-24">
        <motion.h2
          initial={{ opacity: 0, y: 110 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 mb-10 px-6 text-center font-display text-5xl font-semibold leading-none tracking-tight text-foreground sm:px-12 sm:text-7xl lg:px-24 lg:text-8xl"
        >
          {ui.projectsBanner}
        </motion.h2>
        <div className="relative z-10 sm:px-12 lg:px-24">
          <Image
            src="/WOX.COM/projects-banner.webp"
            alt=""
            width={1536}
            height={1024}
            className="h-auto w-full sm:rounded-2xl"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative scroll-mt-20 overflow-hidden px-6 py-24 sm:px-12 lg:px-24">
        <DotGrid />
        <div className="relative mb-16 flex items-baseline justify-between">
          <h2 className="font-mono text-xl tracking-widest text-muted sm:text-2xl">
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

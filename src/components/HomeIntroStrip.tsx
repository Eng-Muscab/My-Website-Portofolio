"use client";

import {
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Github,
  Layers3,
  Rocket,
  Sparkles,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";

import { Badge } from "@/components/Badge";
import { buttonVariants } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import { cn } from "@/lib/utils";

export function HomeIntroStrip({ merged = true }: { merged?: boolean }) {
  const locale = useLocale() as Locale;

  const cards =
    locale === "so"
      ? [
          {
            key: "build",
            icon: BrainCircuit,
            title: "Waxa aan dhiso",
            body: "ML apps, dashboards, portals, APIs, iyo automation tools u shaqeeya hawlo ganacsi oo dhab ah."
          },
          {
            key: "style",
            icon: Layers3,
            title: "Habka shaqada",
            body: "UI nadiif ah, architecture la dayactiri karo, database design wanaagsan, iyo gaarsiin production-ready."
          },
          {
            key: "work",
            icon: BriefcaseBusiness,
            title: "Qaabka iskaashiga",
            body: "Remote-friendly, mashruucyo freelance ah, hagaajin systems jira, ama dhisid nidaam cusub bilow ilaa dhammaad."
          }
        ]
      : [
          {
            key: "build",
            icon: BrainCircuit,
            title: "What I build",
            body: "ML apps, dashboards, portals, APIs, and automation tools designed for real business workflows."
          },
          {
            key: "style",
            icon: Layers3,
            title: "How I work",
            body: "Clean UI, maintainable architecture, solid database design, and production-ready delivery."
          },
          {
            key: "work",
            icon: BriefcaseBusiness,
            title: "Engagement style",
            body: "Remote-friendly freelance work, system upgrades, and full product builds from idea to launch."
          }
        ];

  const quickBadges =
    locale === "so"
      ? ["ML Product Dev", "Full-Stack Systems", "API + SQL", "Remote Collaboration"]
      : ["ML Product Dev", "Full-Stack Systems", "API + SQL", "Remote Collaboration"];

  const deliveryFlow =
    locale === "so"
      ? [
          { step: "01", title: "Discovery", note: "Baahi ururin + scope" },
          { step: "02", title: "Design & Build", note: "UI + API + database + ML" },
          { step: "03", title: "Test & Deploy", note: "Production-ready release" }
        ]
      : [
          { step: "01", title: "Discovery", note: "Requirements and scope alignment" },
          { step: "02", title: "Design & Build", note: "UI, API, database, and ML implementation" },
          { step: "03", title: "Test & Deploy", note: "Production-ready release and handoff" }
        ];

  return (
    <section
      className={cn(
        "relative pb-10 sm:pb-12 lg:pb-14",
        merged ? "-mt-8 z-10 sm:-mt-12 lg:-mt-16" : "-mt-2"
      )}
    >
      <Container>
        <Reveal>
          <div className="surface-card relative overflow-hidden p-[1px] shadow-[0_30px_80px_-38px_rgba(2,6,23,0.45)]">
            <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-background/70 p-4 backdrop-blur-2xl sm:p-5 lg:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 luxe-divider opacity-95" />
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute right-2 top-4 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-10 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl" />
              </div>

              <div className="relative grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      {locale === "so" ? "Hordhac Premium" : "Premium Intro"}
                    </span>
                    <Badge tone="muted">{pickLocaleText(profile.location, locale)}</Badge>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem] lg:leading-tight">
                      {locale === "so"
                        ? "Waxaan dhisaa products casri ah oo isku dara ML, APIs, iyo UX nadiif ah."
                        : "I build modern products that combine ML, APIs, and clean UX."}
                    </h2>
                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {pickLocaleText(profile.tagline, locale)}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {cards.map((card, index) => {
                      const Icon = card.icon;

                      return (
                        <motion.div
                          key={card.key}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.25, delay: index * 0.05 }}
                          className="group rounded-2xl border border-border/80 bg-card/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-card"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-200 group-hover:rotate-3 group-hover:scale-105">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <h3 className="mt-3 text-sm font-semibold text-foreground">{card.title}</h3>
                          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{card.body}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="glass-panel p-3">
                    <div className="flex flex-wrap gap-2">
                      {quickBadges.map((item) => (
                        <Badge key={item} tone="muted">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Link href={`/${locale}#services`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                      {locale === "so" ? "Eeg Adeegyada" : "View Services"}
                    </Link>
                    <Link href={`/${locale}#projects`} className={buttonVariants({ variant: "primary", size: "sm" })}>
                      <Rocket className="h-4 w-4" aria-hidden="true" />
                      {locale === "so" ? "Mashruucyo" : "Projects"}
                    </Link>
                    {profile.links.github ? (
                      <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({ variant: "ghost", size: "sm", className: "border border-border/80 bg-background/50" })}
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-[1px] shadow-[0_20px_60px_-34px_rgba(2,6,23,0.8)]">
                    <div className="rounded-[calc(1rem-1px)] bg-slate-950/95 p-4 text-white">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                          <Workflow className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                          {locale === "so" ? "Delivery Flow" : "Delivery Flow"}
                        </div>
                        <Badge tone="muted" className="border-white/10 bg-white/5 text-white/80">
                          {locale === "so" ? "Production-ready" : "Production-ready"}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        {deliveryFlow.map((item, index) => (
                          <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: 8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.25, delay: index * 0.04 }}
                            className="relative rounded-xl border border-white/10 bg-white/5 p-3"
                          >
                            {index < deliveryFlow.length - 1 ? (
                              <div className="pointer-events-none absolute bottom-[-14px] left-[18px] top-[44px] w-px bg-gradient-to-b from-cyan-300/40 to-transparent" />
                            ) : null}
                            <div className="flex items-start gap-3">
                              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                                {item.step}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                <p className="mt-1 text-sm leading-6 text-white/70">{item.note}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/90">
                        {locale === "so" ? "Stack Core" : "Stack Core"}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-foreground/90">
                        Next.js, React, Node.js, PHP, Python/FastAPI, MySQL/PostgreSQL
                      </p>
                    </div>
                    <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-emerald-500/8 via-emerald-500/4 to-transparent p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                        {locale === "so" ? "Delivery Promise" : "Delivery Promise"}
                      </p>
                      <div className="mt-2 space-y-1.5 text-sm text-foreground/90">
                        <p className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden="true" />
                          {locale === "so" ? "Nadiif + responsive UI" : "Clean, responsive UI"}
                        </p>
                        <p className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden="true" />
                          {locale === "so" ? "API + database architecture" : "API + database architecture"}
                        </p>
                        <p className="inline-flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-300" aria-hidden="true" />
                          {locale === "so" ? "Deploy support" : "Deploy support"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

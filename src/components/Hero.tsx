"use client";

import { ArrowRight, BrainCircuit, Cloud, Database, MapPin, Server, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Badge } from "@/components/Badge";
import { buttonVariants } from "@/components/Button";
import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";

export function Hero() {
  const locale = useLocale() as Locale;
  const tHero = useTranslations("hero");
  const [heroImageSrc, setHeroImageSrc] = useState(profile.avatarImage || "/avatar-placeholder.svg");

  const introLabel =
    locale === "so" ? `Salaan, waxaan ahay ${profile.name}` : `Hi, I'm ${profile.name}`;

  const capabilityCards = [
    {
      label: { en: "ML Features & Detection", so: "Astaamo ML & Detection" },
      icon: BrainCircuit,
      tone: "text-primary"
    },
    {
      label: { en: "Full-Stack APIs", so: "Full-Stack APIs" },
      icon: Server,
      tone: "text-cyan-500"
    },
    {
      label: { en: "SQL & Data Design", so: "SQL & Data Design" },
      icon: Database,
      tone: "text-emerald-500"
    },
    {
      label: { en: "Cloud Deployments", so: "Cloud Deployments" },
      icon: Cloud,
      tone: "text-sky-500"
    }
  ] as const;

  const heroPills =
    locale === "so"
      ? ["ML Dev", "Full-Stack", "UX Nadiif ah", "API + DB"]
      : ["ML Dev", "Full-Stack", "Clean UX", "API + DB"];

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 section-grid opacity-35" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[6%] top-10 h-48 w-48 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[8%] top-28 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute left-1/3 top-0 h-24 w-24 rounded-full bg-amber-300/10 blur-2xl" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] xl:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-7"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {introLabel}
              </span>
              <Badge tone="accent">{pickLocaleText(profile.title, locale)}</Badge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-[1.05]">
                {tHero("headline")}
              </h1>
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-accent" aria-hidden="true" />
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-[1.02rem]">
                {tHero("subheadline")}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}#projects`}
                className={buttonVariants({ size: "lg", className: "shadow-sm hover:shadow-md" })}
              >
                {tHero("viewProjects")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={`/${locale}#contact`}
                className={buttonVariants({ variant: "outline", size: "lg", className: "hover:bg-card" })}
              >
                {tHero("contact")}
              </Link>
            </div>

            <div className="glass-panel flex flex-wrap gap-2 p-2">
              {heroPills.map((pill, index) => (
                <Badge key={`${pill}-${index}`} tone={index === 0 ? "accent" : index === 1 ? "default" : "muted"}>
                  {pill}
                </Badge>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {profile.stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22, delay: 0.1 + index * 0.05 }}
                  className="surface-card surface-card-hover relative overflow-hidden px-4 py-4"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-cyan-400/80 to-accent/80" aria-hidden="true" />
                  <p className="text-xl font-semibold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {pickLocaleText(stat.label, locale)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="surface-card surface-card-hover group relative overflow-hidden p-4 sm:p-5 lg:mt-1"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/12 blur-2xl transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
            <div className="pointer-events-none absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" aria-hidden="true" />

            <div className="relative grid gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-muted p-2">
                <div className="relative h-[23rem] overflow-hidden rounded-xl sm:h-[29rem]">
                  <Image
                    src={heroImageSrc}
                    alt={`${profile.name} portrait`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-[center_24%] transition-transform duration-700 group-hover:scale-[1.035]"
                    priority
                    onError={() => setHeroImageSrc("/avatar-placeholder.svg")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-secondary/15 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/10" aria-hidden="true" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl border border-white/15 bg-black/35 p-3 text-white shadow-[0_10px_30px_-16px_rgba(2,6,23,0.6)] backdrop-blur-md">
                    <p className="text-sm font-semibold">{profile.name}</p>
                    <p className="mt-1 text-xs text-white/80">{pickLocaleText(profile.title, locale)}</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/80">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{pickLocaleText(profile.location, locale)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilityCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label.en}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.12 + index * 0.04 }}
                      className="flex items-center gap-2 rounded-xl border border-border/80 bg-background/70 px-3 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-background"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-card shadow-sm">
                        <Icon className={`h-4 w-4 ${item.tone}`} aria-hidden="true" />
                      </span>
                      <span className="text-xs font-medium text-foreground sm:text-sm">
                        {pickLocaleText(item.label, locale)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="glass-panel flex items-start gap-2 border-dashed p-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-6 text-muted-foreground">{pickLocaleText(profile.tagline, locale)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

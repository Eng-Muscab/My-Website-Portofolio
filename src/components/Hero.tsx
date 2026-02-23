"use client";

import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Database,
  Globe2,
  MapPin,
  Server,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";

export function Hero() {
  const locale = useLocale() as Locale;
  const tHero = useTranslations("hero");
  const [heroImageSrc, setHeroImageSrc] = useState(profile.avatarImage || "/avatar-placeholder.svg");

  const introLabel = locale === "so" ? `Salaan, waxaan ahay ${profile.name}` : `Hi, I'm ${profile.name}`;

  const capabilityCards = [
    {
      key: "ml",
      label: { en: "ML Features & Detection", so: "Astaamo ML & Detection" },
      icon: BrainCircuit
    },
    {
      key: "api",
      label: { en: "Full-Stack APIs", so: "Full-Stack APIs" },
      icon: Server
    },
    {
      key: "db",
      label: { en: "SQL & Data Design", so: "SQL & Data Design" },
      icon: Database
    },
    {
      key: "deploy",
      label: { en: "Cloud Deployment", so: "Cloud Deployment" },
      icon: Cloud
    }
  ] as const;

  const primaryActionClass =
    "inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_12px_28px_-18px_rgba(14,165,233,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_34px_-18px_rgba(14,165,233,0.75)] active:scale-[0.99]";
  const secondaryActionClass =
    "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary/20 bg-transparent px-5 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5 active:scale-[0.99]";

  return (
    <section className="relative overflow-hidden border-b border-border/60 py-12 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-primary/[0.025]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-14 h-48 w-48 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[10%] top-20 h-56 w-56 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-[22px] bg-card/95 p-4 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)] ring-1 ring-black/5 backdrop-blur-xl sm:p-6 lg:p-7 dark:ring-white/5"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] xl:gap-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/15">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {introLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {locale === "so" ? "La heli karo" : "Available"}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {pickLocaleText(profile.title, locale)}
                </p>
                <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-5xl sm:leading-tight lg:text-[3.35rem] lg:leading-[1.02]">
                  {tHero("headline")}
                </h1>
                <p className="max-w-2xl text-base font-medium leading-7 text-foreground/80">
                  {pickLocaleText(profile.tagline, locale)}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {tHero("subheadline")}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-border/70">
                  <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {pickLocaleText(profile.location, locale)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-border/70">
                  <Globe2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  {locale === "so" ? "Remote-friendly" : "Remote-friendly"}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={`/${locale}#projects`} className={primaryActionClass}>
                  {tHero("viewProjects")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href={`/${locale}#contact`} className={secondaryActionClass}>
                  {tHero("contact")}
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilityCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, delay: 0.08 + index * 0.04 }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3 rounded-xl bg-muted/55 px-3 py-3 ring-1 ring-border/70 transition-colors hover:bg-muted/75"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-card shadow-sm ring-1 ring-border/70">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {pickLocaleText(item.label, locale)}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-muted/55 p-3 ring-1 ring-border/70">
                <div className="rounded-[18px] bg-card p-2 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.25)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#ece7dc] shadow-sm dark:bg-slate-900">
                    <Image
                      src={heroImageSrc}
                      alt={`${profile.name} portrait`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      quality={95}
                      className="object-contain object-bottom"
                      priority
                      onError={() => setHeroImageSrc("/avatar-placeholder.svg")}
                    />
                  </div>

                  <div className="mt-3 rounded-xl bg-muted/45 p-3 ring-1 ring-border/60">
                    <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{pickLocaleText(profile.title, locale)}</p>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      <span>{pickLocaleText(profile.location, locale)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {profile.stats.map((stat, index) => (
                  <motion.div
                    key={stat.key}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.14 + index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="rounded-xl bg-muted/55 p-3 text-center ring-1 ring-border/70 transition-colors hover:bg-muted/75"
                  >
                    <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {pickLocaleText(stat.label, locale)}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-xl bg-primary/5 p-3 ring-1 ring-primary/10">
                <p className="text-sm leading-6 text-muted-foreground">
                  <span className="font-medium text-foreground">{locale === "so" ? "Diyaar u ahay" : "Ready for"} </span>
                  {locale === "so"
                    ? "mashruucyo ML, full-stack, iyo automation oo leh qorshe cad iyo gaarsiin tayo leh."
                    : "ML, full-stack, and automation projects with clear planning and high-quality delivery."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

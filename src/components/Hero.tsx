"use client";

import { ArrowRight, Check, MapPin, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";

export function Hero() {
  const locale = useLocale() as Locale;
  const tHero = useTranslations("hero");
  const [heroImageSrc, setHeroImageSrc] = useState(profile.avatarImage || "/avatar-placeholder.svg");

  const introLabel = locale === "so" ? `Haye, ${profile.name}` : `Hi, ${profile.name}`;
  const headlineLead =
    locale === "so" ? "Horumariye ML & full-stack hal-abuur leh" : "A creative ML & full-stack developer";
  const headlineMain =
    locale === "so"
      ? "oo dhisa khibrado dijitaal ah oo kooxuhu ku tiirsanaan karaan."
      : "who creates experiences and products teams can rely on.";
  const primaryCta = locale === "so" ? "I Shaqaaleysi!" : "Hire Me!";
  const secondaryCta = locale === "so" ? "Arag Portfolio-ga" : "See My Portfolio";
  const availabilityLabel = locale === "so" ? "Diyaar u ah shaqo" : "Available for work";
  const locationLabel = pickLocaleText(profile.location, locale).replace(/[.]+$/, "");

  const testimonialPrimary = testimonials[0];
  const testimonialSecondary = testimonials[1] ?? testimonials[0];

  const heroStats = profile.stats.slice(0, 4);

  const truncateQuote = (text: string, max = 86) =>
    text.length > max ? `${text.slice(0, Math.max(0, max - 1)).trimEnd()}...` : text;

  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-transparent">
      <div className="pointer-events-none absolute inset-0 hero-wireframe-grid opacity-90" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-[6%] top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-20 h-44 w-44 rounded-full bg-accent/8 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 hero-dot-cluster opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 hero-dot-cluster opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-28 w-32 hero-dot-cluster opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-32 hero-dot-cluster opacity-70" aria-hidden="true" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid border-x border-border/60 bg-card/72 backdrop-blur-[2px] lg:grid-cols-[1.02fr_0.98fr]"
        >
          <div className="relative border-b border-border/60 lg:border-b-0 lg:border-r">
            <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary ring-1 ring-primary/20 shadow-[0_8px_18px_-14px_rgba(2,6,23,0.35)]">
                  <span>{introLabel}</span>
                  <span aria-hidden="true">*</span>
                </div>

                <div className="mt-6 space-y-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.02]">
                    <span className="block font-medium text-foreground/35">{headlineLead}</span>
                    <span className="block">{headlineMain}</span>
                  </h1>
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {tHero("subheadline")}
                  </p>
                  <p className="max-w-lg text-sm leading-7 text-muted-foreground">
                    {pickLocaleText(profile.tagline, locale)}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}#contact`}
                    className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-primary via-sky-500 to-cyan-400 px-6 text-sm font-semibold text-primary-foreground shadow-[0_14px_24px_-18px_rgba(14,165,233,0.7)] transition-transform hover:-translate-y-0.5"
                  >
                    {primaryCta}
                  </Link>
                  <Link
                    href={`/${locale}#projects`}
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-semibold text-secondary-foreground shadow-[0_14px_24px_-18px_rgba(2,6,23,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
                  >
                    <span>{secondaryCta}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-10">
            <div className="absolute left-4 right-4 top-4 z-10 flex flex-wrap items-center justify-between gap-2 sm:left-6 sm:right-6 sm:top-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/90 px-3 py-1.5 text-[11px] font-medium text-foreground/80 shadow-[0_6px_14px_-12px_rgba(2,6,23,0.28)]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#31c63d]" aria-hidden="true" />
                {availabilityLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary ring-1 ring-primary/15 shadow-[0_6px_14px_-12px_rgba(14,165,233,0.35)]">
                <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
                {locationLabel}
              </span>
            </div>

            <div className="relative mx-auto mt-7 w-full max-w-[26rem] sm:mt-8 lg:max-w-[29rem]">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.06 }}
                className="absolute left-[-0.7rem] top-[7.8rem] z-10 hidden w-44 rounded-2xl border border-border/70 bg-card/95 p-3 shadow-[0_18px_30px_-24px_rgba(2,6,23,0.4)] sm:block lg:left-[-1.75rem] lg:w-48"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                    {testimonialPrimary.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-foreground">{testimonialPrimary.name}</p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {pickLocaleText(testimonialPrimary.organization, locale)}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-[10px] leading-4 text-muted-foreground">
                  &ldquo;{truncateQuote(pickLocaleText(testimonialPrimary.quote, locale), 70)}&rdquo;
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="absolute bottom-[2.2rem] right-[-0.7rem] z-10 hidden w-40 rounded-2xl border border-accent/25 bg-card p-3 shadow-[0_18px_30px_-24px_rgba(34,197,94,0.22)] sm:block lg:right-[-1.65rem] lg:w-44"
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="truncate text-[11px] font-semibold text-foreground">{testimonialSecondary.name}</p>
                    <p className="truncate text-[10px] text-muted-foreground">
                      {pickLocaleText(testimonialSecondary.role, locale)}
                    </p>
                  </div>
                  <Quote className="h-4 w-4 text-foreground/55" aria-hidden="true" />
                </div>
                <p className="mt-2 text-[10px] leading-4 text-foreground/80">
                  {truncateQuote(pickLocaleText(testimonialSecondary.quote, locale), 64)}
                </p>
              </motion.div>

              <div className="absolute right-[-0.3rem] top-[11.2rem] z-10 hidden h-7 w-7 items-center justify-center rounded-full border border-border/70 bg-card shadow-[0_10px_18px_-14px_rgba(2,6,23,0.35)] sm:inline-flex lg:right-[-0.85rem]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-[9px] font-bold text-primary">
                  {profile.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part.charAt(0))
                    .join("")}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-border/70 bg-card shadow-[0_26px_40px_-32px_rgba(2,6,23,0.45)]">
                <div className="pointer-events-none absolute inset-0 hero-card-dots opacity-60" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-border/70" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-border/70" aria-hidden="true" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-card via-card/70 to-transparent" aria-hidden="true" />

                <div className="relative aspect-[0.92] overflow-hidden bg-gradient-to-br from-background via-card to-primary/5 dark:to-primary/10">
                  <Image
                    src={heroImageSrc}
                    alt={`${profile.name} portrait`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={95}
                    className="object-contain object-bottom p-4 pt-12 sm:p-6 sm:pt-14"
                    priority
                    onError={() => setHeroImageSrc("/avatar-placeholder.svg")}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-muted-foreground sm:justify-start">
                <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/90 px-2.5 py-1">
                  <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                  {pickLocaleText(profile.title, locale)}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/90 px-2.5 py-1">
                  <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
                  {locationLabel}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="grid divide-y divide-border/60 border-x border-b border-border/60 bg-card/72 backdrop-blur-[2px] md:grid-cols-4 md:divide-x md:divide-y-0"
        >
          {heroStats.map((stat) => (
            <div key={stat.key} className="px-6 py-5 sm:px-8 sm:py-6">
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-[2.2rem]">{stat.value}</p>
              <p className="mt-1 max-w-[18ch] text-xs leading-5 text-muted-foreground sm:text-sm">
                {pickLocaleText(stat.label, locale)}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

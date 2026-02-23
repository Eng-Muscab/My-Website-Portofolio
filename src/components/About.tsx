"use client";

import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";

export function About() {
  const locale = useLocale() as Locale;
  const tSections = useTranslations("sections.about");
  const tAbout = useTranslations("about.highlights");

  return (
    <section id="about" className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSections("eyebrow")} title={tSections("title")} description={tSections("description")} />
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-card surface-card-hover relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 luxe-divider opacity-80" />
            <div className="space-y-4">
              {profile.about[locale].map((paragraph, index) => (
                <p key={index} className="text-sm leading-7 text-muted-foreground sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.highlights.map((highlight, index) => (
              <Reveal key={highlight.key} delay={index * 0.04}>
                <div className="surface-card surface-card-hover h-full p-4 sm:p-5">
                  <p className="text-sm font-semibold text-foreground">{tAbout(highlight.key)}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {pickLocaleText(highlight.description, locale)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Quote } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";

export function Testimonials() {
  const locale = useLocale() as Locale;
  const tSection = useTranslations("sections.testimonials");

  return (
    <section className="relative py-16 sm:py-20">
      <SectionHeading eyebrow={tSection("eyebrow")} title={tSection("title")} description={tSection("description")} />
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.04}>
              <div className="surface-card surface-card-hover group relative h-full overflow-hidden p-5">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-cyan-400/80 to-accent/80" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-transform duration-300 group-hover:scale-125" />
                <div className="pointer-events-none absolute -left-8 bottom-4 h-16 w-16 rounded-full bg-accent/10 blur-xl" />

                <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{pickLocaleText(testimonial.quote, locale)}</p>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-border/80 bg-muted/20 px-3 py-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-xs font-semibold text-foreground" aria-hidden="true">
                    {testimonial.name
                      .split(" ")
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0]?.toUpperCase())
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {pickLocaleText(testimonial.role, locale)} • {pickLocaleText(testimonial.organization, locale)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

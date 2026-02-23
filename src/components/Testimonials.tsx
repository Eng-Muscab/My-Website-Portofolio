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
                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-xl transition-transform duration-300 group-hover:scale-125" />
                <Quote className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{pickLocaleText(testimonial.quote, locale)}</p>
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-border px-3 py-3">
                  <div className="h-9 w-9 rounded-full bg-muted" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {pickLocaleText(testimonial.role, locale)} - {pickLocaleText(testimonial.organization, locale)}
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

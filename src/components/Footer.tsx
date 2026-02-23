"use client";

import { Github, Globe, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/Container";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { pickLocaleText } from "@/lib/localize";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  const quickLinks = [
    { id: "about", label: tNav("about") },
    { id: "skills", label: tNav("skills") },
    { id: "projects", label: tNav("projects") },
    { id: "services", label: tNav("services") },
    { id: "contact", label: tNav("contact") }
  ];

  const socialLinks = [
    { key: "email", label: "Email", icon: Mail, href: `mailto:${profile.links.email}` },
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: MessageCircle,
      href: getWhatsAppUrl(profile.links.whatsapp)
    },
    { key: "github", label: "GitHub", icon: Github, href: profile.links.github || undefined },
    { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: profile.links.linkedin || undefined },
    { key: "website", label: "Website", icon: Globe, href: `/${locale}` }
  ];

  return (
    <footer className="relative border-t border-border/70 py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px luxe-divider opacity-80" aria-hidden="true" />
      <Container>
        <div className="surface-card surface-card-hover relative overflow-hidden p-5 sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-xl" aria-hidden="true" />
          <div className="pointer-events-none absolute left-10 top-8 h-16 w-16 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
            <div>
              <p className="inline-flex items-center rounded-xl border border-border bg-card px-3 py-1.5 text-sm font-semibold shadow-sm">
                {profile.name}
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                {pickLocaleText(profile.tagline, locale)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{pickLocaleText(profile.location, locale)}</p>
              <p className="mt-4 text-xs text-muted-foreground">{tFooter("languageNote")}</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-foreground">{tFooter("quickLinks")}</h2>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Footer quick links">
                {quickLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`/${locale}#${link.id}`}
                    className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-0.5 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-foreground">{tFooter("social")}</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  if (!item.href) {
                    return (
                      <span
                        key={item.key}
                        aria-disabled="true"
                        className={cn(
                          "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground"
                        )}
                        title={`${item.label} (${locale === "so" ? "Dhawaan imanaya" : "Coming soon"})`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">{item.label}</span>
                      </span>
                    );
                  }

                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:text-primary"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border/70 pt-4 text-xs text-muted-foreground">
            Copyright {new Date().getFullYear()} {profile.name}. {tFooter("copyright")}
          </div>
        </div>
      </Container>
    </footer>
  );
}

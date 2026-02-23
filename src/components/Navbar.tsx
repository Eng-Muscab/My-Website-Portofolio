"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { buttonVariants, Button } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileMenu } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";

export function Navbar() {
  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "about", label: tNav("about") },
    { id: "skills", label: tNav("skills") },
    { id: "projects", label: tNav("projects") },
    { id: "services", label: tNav("services") },
    { id: "contact", label: tNav("contact") }
  ];

  return (
    <header className="sticky top-0 z-50 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel flex h-16 items-center gap-2 px-3 sm:px-4">
          <Link href={`/${locale}`} className="shrink-0">
            <span className="group inline-flex items-center gap-2 rounded-xl border border-primary/15 bg-card/80 px-3 py-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-cyan-400/10 to-accent/20 text-primary ring-1 ring-primary/10">
                <Sparkles className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground">{profile.brandName}</span>
            </span>
          </Link>

          <nav
            className="hidden min-w-0 items-center gap-1 rounded-xl border border-border/70 bg-background/60 p-1 xl:flex"
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/${locale}#${link.id}`}
                className="shrink-0 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-card hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-1.5 xl:flex">
            <div className="glass-panel flex items-center gap-1 px-1.5 py-1">
              <ThemeToggle />
              <LanguageToggle />
            </div>
            <Link href={`/${locale}#contact`} className={buttonVariants({ size: "sm", className: "shrink-0 px-3 text-sm" })}>
              {tNav("hireMe")}
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 w-9 rounded-full p-0"
              aria-label={mobileOpen ? tCommon("closeMenu") : tCommon("openMenu")}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu-panel"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            </Button>
          </div>
        </div>
      </div>

      <div id="mobile-menu-panel">
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}

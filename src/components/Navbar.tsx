"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
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
  const tCommon = useTranslations("common");
  const tNav = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const desktopLinks = [
    { id: "about", label: tNav("about") },
    { id: "skills", label: tNav("skills") },
    { id: "projects", label: tNav("projects") },
    { id: "services", label: tNav("services") },
    { id: "contact", label: tNav("contact") }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-2 lg:h-[72px]">
          <Link href={`/${locale}`} className="group shrink-0">
            <span className="inline-flex items-center gap-2 rounded-xl px-1.5 py-1">
              <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-cyan-400/10 to-accent/20 ring-1 ring-primary/15">
                <Image
                  src={profile.avatarImage || "/avatar-placeholder.svg"}
                  alt={`${profile.name} logo`}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center gap-4 xl:flex" aria-label="Primary navigation">
            {desktopLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${locale}#${link.id}`}
                className="shrink-0 whitespace-nowrap rounded-md px-1 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
            <div className="glass-panel flex items-center gap-1 px-1.5 py-1">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            <Link
              href={`/${locale}#contact`}
              className={buttonVariants({ size: "sm", className: "h-10 rounded-xl px-4 text-sm" })}
            >
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

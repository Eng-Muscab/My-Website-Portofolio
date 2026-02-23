"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { buttonVariants } from "@/components/Button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const locale = useLocale();
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  const links = [
    { id: "about", label: tNav("about") },
    { id: "skills", label: tNav("skills") },
    { id: "projects", label: tNav("projects") },
    { id: "services", label: tNav("services") },
    { id: "contact", label: tNav("contact") }
  ];

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
          className="px-4 pb-2 xl:hidden sm:px-6"
        >
          <div className="glass-panel mx-auto flex max-w-7xl flex-col gap-4 border border-border/70 p-4">
            <nav className="grid grid-cols-2 gap-2" aria-label={tCommon("mobileNavigation")}>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={`/${locale}#${link.id}`}
                  onClick={onClose}
                  className="rounded-xl border border-border/80 bg-card/80 px-3 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="glass-panel flex flex-wrap items-center gap-2 p-2">
              <ThemeToggle />
              <LanguageToggle />
              <Link
                href={`/${locale}#contact`}
                onClick={onClose}
                className={cn(buttonVariants({ size: "sm" }), "ml-auto")}
              >
                {tNav("hireMe")}
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

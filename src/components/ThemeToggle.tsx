"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("common");
  const lightLabel = t("themeLight");
  const darkLabel = t("themeDark");

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/70 p-1 shadow-sm backdrop-blur-md"
      role="group"
      aria-label={t("themeToggle")}
      title={t("themeToggle")}
    >
      <span className="hidden items-center gap-1.5 rounded-full px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground xl:inline-flex">
        <Palette className="h-3.5 w-3.5" aria-hidden="true" />
        {t("themeLabel")}
      </span>
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-pressed={!isDark}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
          !isDark
            ? "bg-card text-foreground shadow-sm ring-1 ring-border"
            : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
        )}
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">{lightLabel}</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-pressed={isDark}
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200",
          isDark
            ? "bg-card text-foreground shadow-sm ring-1 ring-border"
            : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
        )}
      >
        <Moon className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">{darkLabel}</span>
      </button>
    </div>
  );
}

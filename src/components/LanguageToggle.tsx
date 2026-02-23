"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { localeCookieName, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  if (parts.length > 1) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}`;
}

export function LanguageToggle() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === currentLocale) return;

    const nextPath = replaceLocaleInPathname(pathname, nextLocale);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;

    try {
      localStorage.setItem("preferred-locale", nextLocale);
    } catch {
      // Ignore storage failures (private mode, disabled storage).
    }

    router.push(`${nextPath}${hash}`);
  }

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/70 p-1 shadow-sm backdrop-blur-md"
      role="group"
      aria-label={t("languageToggle")}
      title={t("languageToggle")}
    >
      {(["en", "so"] as const).map((locale) => {
        const active = currentLocale === locale;

        return (
          <button
            key={locale}
            type="button"
            onClick={() => changeLocale(locale)}
            aria-pressed={active}
            className={cn(
              "inline-flex h-8 min-w-[2.2rem] items-center justify-center rounded-full px-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200",
              active
                ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
            )}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}

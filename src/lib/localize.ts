import type { Locale } from "@/i18n/config";
import type { LocalizedText } from "@/types/content";

export function pickLocaleText(value: LocalizedText, locale: Locale) {
  return value[locale] ?? value.en;
}

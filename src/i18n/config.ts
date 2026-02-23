export const locales = ["en", "so"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getMessages(locale: Locale) {
  return (await import(`../messages/${locale}.json`)).default;
}

import { getRequestConfig } from "next-intl/server";

import { defaultLocale, getMessages, isLocale } from "@/i18n/config";

export default getRequestConfig(async (params) => {
  const requestedLocale =
    "requestLocale" in params && params.requestLocale
      ? await params.requestLocale
      : "locale" in params
        ? params.locale
        : undefined;

  const resolvedLocale = requestedLocale && isLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: await getMessages(resolvedLocale)
  };
});

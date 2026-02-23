import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { getMessages, isLocale, locales, type Locale } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  const title = messages.metadata.title as string;
  const description = messages.metadata.description as string;
  const url = `${siteUrl}/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en`,
        so: `${siteUrl}/so`
      }
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Institutional Portfolio",
      locale: locale === "so" ? "so_SO" : "en_US",
      images: [
        {
          url: `${siteUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: "Portfolio preview"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og-image.svg`]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale as Locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale} className="min-h-screen">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}

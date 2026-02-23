import { HomePage } from "@/components/HomePage";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <HomePage />;
}

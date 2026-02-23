import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { Providers } from "@/components/providers/Providers";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio",
  description: "Bilingual portfolio website",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

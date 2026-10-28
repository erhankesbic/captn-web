import type { Metadata, Viewport } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// Ersatz für SF Pro Rounded auf Geräten ohne Apple-Systemschrift
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"], weight: ["800", "900"] });

const TITLE = "Capt'n – Dein KI-Personal-Trainer für Training & Ernährung";
const DESCRIPTION =
  "Trainingsplan nach Maß, Ernährung in Sekunden erfasst und ein KI-Coach, der für dich handelt. Für iPhone und Apple Watch – kostenlos im App Store.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s – Capt'n" },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "de_DE",
    siteName: "Capt'n",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  itunes: { appId: "6759269133" },
};

export const viewport: Viewport = {
  themeColor: "#08090e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${geist.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}

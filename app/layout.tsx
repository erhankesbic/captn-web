import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capt'n – Dein KI-Personal-Trainer & Ernährungsberater",
  description:
    "Training + Ernährung in einer App. KI-Trainingspläne, Food Scan, personalisierter Coach. Jetzt als Beta-Tester bewerben.",
  keywords: [
    "Fitness",
    "KI",
    "Personal Trainer",
    "Ernährung",
    "Training",
    "App",
    "iOS",
    "DACH",
  ],
  icons: {
    icon: "/logo/captndatalogo-iOS-Default-1024x1024@1x.png",
    apple: "/logo/captndatalogo-iOS-Default-1024x1024@1x.png",
  },
  openGraph: {
    title: "Capt'n – Dein KI-Personal-Trainer & Ernährungsberater",
    description:
      "Training + Ernährung in einer App. KI-Trainingspläne, Food Scan, personalisierter Coach.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capt'n – Dein KI-Personal-Trainer & Ernährungsberater",
    description: "Training + Ernährung in einer App. KI-Trainingspläne, Food Scan, personalisierter Coach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

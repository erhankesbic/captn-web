import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Captn – Dein KI-Personal-Trainer & Ernährungsberater",
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
  openGraph: {
    title: "Captn – Dein KI-Personal-Trainer & Ernährungsberater",
    description:
      "Training + Ernährung in einer App. KI-Trainingspläne, Food Scan, personalisierter Coach.",
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
      </body>
    </html>
  );
}

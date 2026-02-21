import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Einstellungen – Captn",
  description: "Cookie-Einstellungen und Einwilligung für die Captn-Website.",
};

export default function CookieEinstellungenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

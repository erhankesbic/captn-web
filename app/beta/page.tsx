import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BetaProcess from "@/components/BetaProcess";
import BetaForm from "@/components/BetaForm";
import BetaHero from "@/components/BetaHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Feedback-Programm – Capt'n",
  description:
    "Werde Tester für Capt'n – deinen KI-Personal-Trainer & Ernährungsberater. Teste neue Features zuerst via TestFlight und hilf uns, die App zu verbessern.",
};

export default function BetaPage() {
  return (
    <>
      <Nav />
      <main>
        <BetaHero />
        <BetaProcess />
        <BetaForm />
      </main>
      <Contact />
    </>
  );
}

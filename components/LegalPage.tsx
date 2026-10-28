import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function LegalPage({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="px-[var(--gutter)] pb-24 pt-32 md:px-8">
        <article className="legal mx-auto max-w-2xl">
          {children}
          <p className="mt-14">
            <Link href="/">← Zur Startseite</Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

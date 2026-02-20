export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Kontakt
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Fragen oder Feedback? Schreib uns.
        </p>
        <a
          href="mailto:support@getcaptn.com"
          className="mt-6 inline-block text-lg font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-90"
        >
          support@getcaptn.com
        </a>
        <p className="mt-8 text-sm text-[var(--muted)]">
          getcaptn.de · getcaptn.com
        </p>
      </div>
    </section>
  );
}

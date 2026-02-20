export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-[var(--border)] bg-[var(--card)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Stimmen zur Beta
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Wir fügen bald Stimmen von Beta-Testern hinzu. Du kannst einer der
          Ersten sein – bewirb dich unten.
        </p>
      </div>
    </section>
  );
}

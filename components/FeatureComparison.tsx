const rows = [
  { feature: "Food Image Analysen/Tag", free: "0", basic: "3", premium: "5" },
  { feature: "AI Chat Anfragen/Tag", free: "10", basic: "30", premium: "60" },
  { feature: "KI-Trainingsplan (Wochen)", free: "2", basic: "6", premium: "8" },
  { feature: "Manuelle Trainingspläne (Wochen)", free: "8", basic: "8", premium: "8" },
  { feature: "Fortschrittsanalyse (Premium)", free: "—", basic: "—", premium: "✓" },
  { feature: "Trainings-Chat", free: "✓", basic: "✓", premium: "✓" },
  { feature: "Ernährungs-Chat", free: "✓", basic: "✓", premium: "✓" },
  { feature: "Apple Health Sync", free: "✓", basic: "✓", premium: "✓" },
  { feature: "Mahlzeiten-Tracking", free: "✓", basic: "✓", premium: "✓" },
];

export default function FeatureComparison() {
  return (
    <section
      id="vergleich"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="vergleich-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="vergleich-heading"
          className="text-center text-3xl font-bold text-[var(--foreground)] sm:text-4xl"
        >
          Feature-Vergleich
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          Übersicht: Free, Basic und Premium im Vergleich.
        </p>
        <div className="mt-12 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--background)]">
                <th className="p-4 font-semibold text-[var(--foreground)]">
                  Feature
                </th>
                <th className="p-4 font-semibold text-[var(--foreground)]">
                  Free
                </th>
                <th className="p-4 font-semibold text-[var(--foreground)]">
                  Basic
                </th>
                <th className="p-4 font-semibold text-[var(--foreground)]">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-[var(--border)] last:border-0"
                >
                  <td className="p-4 text-[var(--foreground)]">{row.feature}</td>
                  <td className="p-4 text-[var(--muted)]">{row.free}</td>
                  <td className="p-4 text-[var(--muted)]">{row.basic}</td>
                  <td className="p-4 text-[var(--muted)]">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

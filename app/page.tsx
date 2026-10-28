import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { AppStoreButton, Arrow, Check, Kicker, Phone } from "@/components/ui";
import { APP_STORE_URL, SUPPORT_EMAIL } from "@/lib/site";

/* Neu in Version 1.6 – Texte aus den Release Notes im App Store */
const NEW_IN_16 = [
  {
    title: "Dein Capt'n-Briefing",
    text: "Die Startseite zeigt, was gerade dran ist – mit deinen echten Zahlen: Ziel für heute, offenes Protein, deine Erholung. Ein Tipp genügt.",
  },
  {
    title: "Frag den Capt'n",
    text: "Frage stellen, Antwort direkt darunter. Schreib, was du gegessen hast, und trag es mit einem Tipp ein. Planänderungen übernimmst du genauso – und machst sie bei Bedarf rückgängig.",
  },
  {
    title: "Wochen-Check-in",
    text: "Jeden Sonntag schaut der Capt'n mit dir auf die Woche: Kennzahlen, Erfolge und Vorschläge für Training und Ernährung, die du direkt übernehmen kannst.",
  },
];

const CHAPTERS: {
  id: string;
  tone: string;
  kicker: string;
  title: string;
  text: ReactNode;
  bullets: string[];
  screen: { src: string; alt: string };
}[] = [
  {
    id: "plan",
    tone: "var(--accent)",
    kicker: "Trainingsplan",
    title: "Ein Plan, der wirklich deiner ist.",
    text: (
      <>
        In Minuten ein Plan nach Maß – abgestimmt auf Fitnesslevel, Ziele, Equipment und Beschwerden. Übungen, die dir
        nicht guttun, fliegen automatisch raus. Schmerzen im Knie? Capt&apos;n plant drumherum.
      </>
    ),
    bullets: [
      "Ändert sich etwas, sag es dem Coach – der Plan passt sich an",
      "Jede KI-Anpassung nachvollziehbar und rückgängig zu machen",
      "Aufwärmen passend zur heutigen Einheit",
    ],
    screen: { src: "/screens/plan.webp", alt: "Trainings-Tab mit aktivem KI-Plan und nächster Einheit" },
  },
  {
    id: "workout",
    tone: "var(--workout)",
    kicker: "Workout-Modus",
    title: "Ein Tipp pro Satz. Weiter.",
    text: (
      <>
        Gewicht und Wiederholungen stehen schon da – abhaken und weiter. Wie schwer der Satz war, fragt der Capt&apos;n
        in der Pause. So lernt er, wie hart du wirklich trainierst, und steuert die nächsten Einheiten danach.
      </>
    ),
    bullets: [
      "Vor dem Start: Trainingsbereitschaft aus Erholung, Ruhepuls und Schlaf",
      "Pausen-Timer, Aufwärmsätze und dein letztes Ergebnis direkt am Satz",
      "Scheibenrechner und automatisch erkannte Bestleistungen",
    ],
    screen: { src: "/screens/bereitschaft.webp", alt: "Workout-Vorschau mit Zielmuskulatur und Trainingsbereitschaft" },
  },
  {
    id: "ernaehrung",
    tone: "var(--nutrition)",
    kicker: "Ernährung",
    title: "Schreib einfach, was du gegessen hast.",
    text: (
      <>
        „200 g Hähnchenbrust, 150 g Reis, Brokkoli“ – Capt&apos;n erkennt die Lebensmittel und rechnet Kalorien und
        Makros aus. Oder fotografier dein Essen, oder scann den Barcode. Was dir heute noch fehlt, steht ganz oben.
      </>
    ),
    bullets: [
      "Text, Foto oder Barcode – wie es gerade passt",
      "Kalorienziel aus deinen Körperdaten und deinem Alltag",
      "KI-Wochenpläne mit Rezepten",
    ],
    screen: { src: "/screens/ernaehrung-text.webp", alt: "Mahlzeit per Text eingegeben, erkannte Lebensmittel mit Makros" },
  },
  {
    id: "zielkurs",
    tone: "var(--progress)",
    kicker: "Fortschritt",
    title: "Weißt du, wann du dein Ziel erreichst?",
    text: (
      <>
        Capt&apos;n schon. Ob Wunschgewicht, Kraftziel oder Umfang: Du siehst Soll und Ist, ob du auf Kurs bist – und wann
        du voraussichtlich ankommst.
      </>
    ),
    bullets: [
      "Training, Ernährung und Körper auf einen Blick",
      "Muskelvolumen und Erholung im Blick",
      "XP, Level, über 35 Achievements und deine Streak",
    ],
    screen: { src: "/screens/fortschritt.webp", alt: "Fortschritt für Training, Ernährung und Körper mit Zielgewicht" },
  },
];

const WATCH = [
  { src: "/watch/01_workout_start.webp", alt: "Apple Watch: Workout starten" },
  { src: "/watch/04_satz_tracking.webp", alt: "Apple Watch: Satz erfassen" },
  { src: "/watch/05_pause_und_rir.webp", alt: "Apple Watch: Pause und RIR" },
  { src: "/watch/08_ernaehrung_loggen.webp", alt: "Apple Watch: Ernährung eintragen" },
  { src: "/watch/10_wochenstatus.webp", alt: "Apple Watch: Wochenstatus" },
];

const GALLERY = [
  ["01_ki_coach_immer_an_bord", "KI-Coach: Dein Coach. Immer an Bord."],
  ["02_ki_plan_der_mit_dir_waechst", "Intelligenter Trainingsplan"],
  ["03_fokussiert_trainieren", "Smartes Workout-Tracking"],
  ["04_ernaehrung_einfach_erfasst", "Ernährung einfach erfasst"],
  ["05_bereit_wenn_du_es_bist", "Trainingsbereitschaft"],
  ["06_fortschritt_der_motiviert", "Fortschritt auf einen Blick"],
  ["07_workouts_entdecken", "Workouts entdecken"],
  ["08_uebungen_glasklar", "Übungsdetails mit Tempo und RIR"],
  ["09_smart_aufwaermen", "Aufwärmen passend zur Einheit"],
  ["10_ki_anpassungen", "KI-Anpassungen nachvollziehbar"],
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Was ist Capt'n?",
    a: "Ein KI-Personal-Trainer als App: Capt'n erstellt deinen Trainingsplan, begleitet dich durchs Workout, erfasst deine Ernährung und beantwortet Fragen im Chat. Training und Ernährung greifen dabei ineinander – und der Plan passt sich an, wenn sich bei dir etwas ändert.",
  },
  {
    q: "Auf welchen Geräten läuft Capt'n?",
    a: "Auf dem iPhone ab iOS 18, mit eigener App für die Apple Watch. Die App gibt es auf Deutsch und Englisch.",
  },
  {
    q: "Was kostet Capt'n?",
    a: "Laden und Grundfunktionen sind kostenlos. Basic kostet 4,99 € im Monat oder 44,99 € im Jahr, Premium 7,99 € im Monat oder 69,99 € im Jahr. Die Jahresabos kannst du eine Woche gratis testen.",
  },
  {
    q: "Wie kündige ich mein Abo?",
    a: "Abgeschlossen und gekündigt wird über Apple: Einstellungen › dein Name › Abonnements › Capt'n. Du kannst jederzeit kündigen, das Abo läuft dann bis zum Ende des bezahlten Zeitraums.",
  },
  {
    q: "Ersetzt Capt'n Arzt oder Physiotherapie?",
    a: "Nein. Capt'n berücksichtigt Beschwerden bei der Übungsauswahl, stellt aber keine Diagnosen. Bei Schmerzen, Verletzungen oder Vorerkrankungen sprich bitte vorher mit einer Ärztin oder einem Arzt.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: (
      <>
        Deine Daten werden verschlüsselt übertragen und beim Backend-Anbieter Convex gespeichert; für Pläne, Chat und
        Bildanalyse nutzen wir KI-Dienste von OpenAI. Apple Health ist optional. Dein Konto samt Daten löschst du jederzeit selbst in
        der App unter Profil › Account löschen. Alles Weitere steht in der{" "}
        <a href="/app-datenschutz" className="text-[var(--accent)] underline underline-offset-2">
          Datenschutzerklärung der App
        </a>
        .
      </>
    ),
  },
  {
    q: "Wo bekomme ich Hilfe?",
    a: (
      <>
        Schreib uns an{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--accent)] underline underline-offset-2">
          {SUPPORT_EMAIL}
        </a>
        .
      </>
    ),
  },
];

function SectionHead({ kicker, title, lead, tone }: { kicker: string; title: ReactNode; lead?: ReactNode; tone?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <Kicker tone={tone}>{kicker}</Kicker>
      <h2 className="display mt-4 text-[clamp(2.25rem,5vw,3.5rem)]">{title}</h2>
      {lead && <p className="lead mt-5">{lead}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="grain relative overflow-hidden px-[var(--gutter)] pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
          <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div className="text-center lg:text-left">
              <Kicker>KI-Personal-Trainer für iPhone &amp; Apple Watch</Kicker>
              <h1 className="display mt-5 text-[clamp(3rem,8vw,5.5rem)]">
                Dein Coach.
                <br />
                <span className="text-[var(--accent)] [text-shadow:0_0_40px_rgba(40,232,196,0.35)]">Immer an Bord.</span>
              </h1>
              <p className="lead mx-auto mt-6 max-w-xl lg:mx-0">
                Capt&apos;n plant dein Training nach Maß, erfasst deine Ernährung in Sekunden und passt beides an, wenn das
                Leben dazwischenkommt. Fragen beantwortet er sofort – Änderungen übernimmst du mit einem Tipp.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <AppStoreButton label="Kostenlos im App Store" />
                <a href="#funktionen" className="btn btn-ghost">
                  Was Capt&apos;n kann <Arrow />
                </a>
              </div>
              <p className="mt-5 text-sm text-[var(--text-3)]">
                Kostenlos laden · Basic und Premium im Jahresabo eine Woche gratis
              </p>
            </div>

            <div className="relative mx-auto flex h-[560px] w-full max-w-[440px] justify-center lg:h-[620px]">
              <div className="stage-light absolute inset-0" aria-hidden="true" />
              <Phone
                src="/screens/ernaehrung-tag.webp"
                alt="Ernährung: Kalorien und Makros des Tages"
                width={230}
                className="absolute left-0 top-16 -rotate-6 opacity-60 max-sm:hidden"
              />
              <Phone
                src="/screens/workout.webp"
                alt="Laufendes Workout: Satz mit Gewicht, Wiederholungen und RIR-Auswahl"
                width={270}
                priority
                className="float relative z-10 sm:translate-x-12"
              />
            </div>
          </div>
        </section>

        {/* ── Neu in 1.6 ── */}
        <section className="section border-t border-[var(--hairline)]" aria-labelledby="neu-heading">
          <div className="wrap">
            <div className="reveal mx-auto max-w-2xl text-center">
              <Kicker>Neu · Version 1.6</Kicker>
              <h2 id="neu-heading" className="display mt-4 text-[clamp(2.25rem,5vw,3.5rem)]">
                Der Capt&apos;n handelt jetzt für dich.
              </h2>
              <p className="lead mt-5">Das größte Update seit dem Start – schneller, klarer und deutlich zuverlässiger.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {NEW_IN_16.map((item, i) => (
                <article key={item.title} className="reveal stage p-7">
                  <p className="num text-sm text-[var(--accent)]">0{i + 1}</p>
                  <h3 className="display mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--text-2)]">{item.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-[var(--text-3)]">
              Außerdem: neues, schnelleres KI-Modell · Texte wachsen mit deiner Schriftgröße · rund 80 Fehler behoben
            </p>
          </div>
        </section>

        {/* ── Funktionen ── */}
        <section id="funktionen" className="section border-t border-[var(--hairline)] bg-[var(--bg-deep)]" aria-labelledby="funktionen-heading">
          <div className="wrap">
            <SectionHead
              kicker="Funktionen"
              title={<span id="funktionen-heading">Training und Ernährung, die zusammenarbeiten.</span>}
              lead="Ein Coach für alles – statt mehrerer Apps, die nichts voneinander wissen."
            />
            <div className="mt-20 space-y-28 md:space-y-36">
              {CHAPTERS.map((c, i) => (
                <article
                  key={c.id}
                  id={c.id}
                  className="grid items-center gap-12 md:grid-cols-2 md:gap-20"
                  style={{ "--tone": c.tone } as CSSProperties}
                >
                  <div className={`stage-light reveal flex justify-center ${i % 2 ? "md:order-2" : ""}`}>
                    <Phone src={c.screen.src} alt={c.screen.alt} width={290} />
                  </div>
                  <div className="reveal">
                    <Kicker tone={c.tone}>{c.kicker}</Kicker>
                    <h3 className="display mt-4 text-[clamp(2rem,4vw,3rem)]">{c.title}</h3>
                    <p className="lead mt-5">{c.text}</p>
                    <ul className="mt-8 space-y-3.5">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[var(--text)]">
                          <span
                            className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full"
                            style={{ background: `color-mix(in srgb, ${c.tone} 16%, transparent)`, color: c.tone }}
                          >
                            <Check size={13} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Apple Watch & Health ── */}
        <section id="watch" className="section border-t border-[var(--hairline)]" aria-labelledby="watch-heading">
          <div className="wrap">
            <SectionHead
              kicker="Apple Watch & Apple Health"
              title={<span id="watch-heading">Auch am Handgelenk an Bord.</span>}
              lead="Workouts direkt auf der Apple Watch loggen – Sätze, Pausen und RIR. Capt'n liest Schritte, aktive Kalorien und Ruhepuls aus Apple Health, schreibt dein Gewicht zurück und schließt mit jedem Training deine Aktivitätsringe."
            />
          </div>
          <div className="rail mt-14 md:justify-center" aria-label="Apple-Watch-Ansichten">
            {WATCH.map((w) => (
              <div key={w.src} className="watch">
                <Image src={w.src} alt={w.alt} width={368} height={448} sizes="150px" />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-[var(--text-3)]">
            Dazu Widgets mit deinem nächsten Workout auf dem Homescreen.
          </p>
        </section>

        {/* ── Einblicke ── */}
        <section className="section border-t border-[var(--hairline)] bg-[var(--bg-deep)] !px-0" aria-labelledby="einblicke-heading">
          <div className="wrap px-[var(--gutter)]">
            <SectionHead kicker="Einblicke" title={<span id="einblicke-heading">So sieht Capt&apos;n aus.</span>} />
          </div>
          <div className="rail mt-12" tabIndex={0} aria-label="App-Screenshots, seitlich scrollbar">
            {GALLERY.map(([file, alt]) => (
              <Image
                key={file}
                src={`/gallery/${file}.webp`}
                alt={alt}
                width={560}
                height={1216}
                sizes="260px"
                className="h-auto w-[230px] rounded-[22px] border border-[var(--hairline)] md:w-[260px]"
              />
            ))}
          </div>
        </section>

        {/* ── Preise ── */}
        <section id="preise" className="section border-t border-[var(--hairline)]" aria-labelledby="preise-heading">
          <div className="wrap">
            <SectionHead
              kicker="Preise"
              title={<span id="preise-heading">Kostenlos starten. Mehr, wenn du willst.</span>}
              lead="Alles Wichtige ist frei. Basic und Premium geben dir mehr KI pro Tag, Foto-Analyse und längere Pläne."
            />
            <Pricing />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="section border-t border-[var(--hairline)] bg-[var(--bg-deep)]" aria-labelledby="faq-heading">
          <div className="wrap max-w-3xl">
            <SectionHead kicker="FAQ" title={<span id="faq-heading">Häufige Fragen</span>} />
            <div className="mt-12 space-y-3">
              {FAQ.map((item) => (
                <details key={item.q} className="faq stage overflow-hidden">
                  <summary className="flex min-h-16 items-center justify-between gap-4 px-6 py-4 text-left font-bold">
                    {item.q}
                    <span className="plus flex-none text-2xl font-light text-[var(--accent)]" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 leading-relaxed text-[var(--text-2)]">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Abschluss ── */}
        <section className="grain section border-t border-[var(--hairline)] text-center">
          <div className="wrap reveal">
            <Image
              src="/brand/captain.webp"
              alt=""
              width={417}
              height={360}
              className="float mx-auto mb-6 h-auto w-[200px] md:w-[240px]"
            />
            <h2 className="display text-[clamp(2.25rem,6vw,4rem)]">
              Leg heute los.
              <br />
              <span className="text-[var(--accent)]">Dein Capt&apos;n wartet schon.</span>
            </h2>
            <div className="mt-9 flex justify-center">
              <AppStoreButton label="Kostenlos im App Store" />
            </div>
            <p className="mt-5 text-sm text-[var(--text-3)]">
              Für iPhone ab iOS 18 · mit Apple-Watch-App ·{" "}
              <a className="underline underline-offset-2 hover:text-white" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                Bewertungen im App Store
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

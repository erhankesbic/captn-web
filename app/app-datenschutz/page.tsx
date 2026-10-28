import LegalPage from "@/components/LegalPage";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata = {
  title: "Datenschutz (App)",
  description:
    "Datenschutzerklärung der Capt'n-App für iPhone und Apple Watch / Privacy Policy of the Capt'n app.",
  alternates: { canonical: "/app-datenschutz" },
};

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function AppDatenschutzPage() {
  return (
    <LegalPage>
      {/* ══════════════ DEUTSCH ══════════════ */}
      <div>
        <h1>Datenschutzerklärung der Capt&apos;n-App</h1>
        <p>Stand: 28. Oktober 2026 · <a href="#en">English version below</a></p>
        <p>
          Diese Erklärung gilt für die App Capt&apos;n für iPhone und Apple Watch. Für die Website gilt die{" "}
          <a href="/datenschutz">Datenschutzerklärung der Website</a>.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Erhan Kesbic
          <br />
          Seckbacher Landstraße 74
          <br />
          60389 Frankfurt am Main, Deutschland
          <br />
          E-Mail: <Mail />
        </p>

        <h2>2. Welche Daten wir verarbeiten</h2>
        <ul>
          <li>
            <strong>Konto:</strong> E-Mail-Adresse, Passwort (nur als Hash gespeichert), optional dein Name. Bei
            „Mit Apple anmelden“ erhalten wir von Apple eine Kennung und die E-Mail-Adresse, die du freigibst
            (auf Wunsch eine anonyme Weiterleitungsadresse von Apple).
          </li>
          <li>
            <strong>Profil- und Gesundheitsdaten:</strong> Alter, Geschlecht, Größe, Gewicht, Körperfettanteil,
            Körpermaße, Fitnesslevel, Ziele, Equipment, Beschwerden und Schmerzregionen, Allergien,
            Ernährungsvorlieben, Schlaf- und Alltagsgewohnheiten.
          </li>
          <li>
            <strong>Trainings- und Ernährungsdaten:</strong> Trainings- und Ernährungspläne, Workouts mit Sätzen,
            Gewichten und Anstrengung (RIR), Mahlzeiten, Wasser, Ziele, Streaks und Erfolge.
          </li>
          <li>
            <strong>Inhalte, die du eingibst:</strong> Fragen an den Coach und Mahlzeiten-Beschreibungen. Essensfotos
            für die Bildanalyse werden hochgeladen und bei der Mahlzeit gespeichert. Fortschrittsfotos bleiben nur auf
            deinem Gerät.
          </li>
          <li>
            <strong>Apple Health (optional):</strong> Mit deiner Freigabe liest die App Schritte, aktive Kalorien,
            Gewicht, Ruhepuls, Herzfrequenzvariabilität (HRV) und Schlaf. Die Apple-Watch-App liest während eines
            Workouts Herzfrequenz und aktive Kalorien. Capt&apos;n schreibt Gewicht, Workouts und aktive Kalorien
            zurück. Gelesene Werte werden mit deinem Konto synchronisiert, damit Briefing, Trainingsbereitschaft und
            Pläne sie nutzen können.
          </li>
          <li>
            <strong>Abo:</strong> Abo-Stufe, Laufzeit und Kaufbelege. Die Zahlung selbst wickelt Apple ab; wir
            erhalten keine Zahlungsdaten.
          </li>
          <li>
            <strong>Geräte- und Nutzungsdaten:</strong> Push-Token für Benachrichtigungen, App-Version, Gerätetyp,
            Sprache sowie Ereignisse in der App (zum Beispiel „Workout abgeschlossen“, „Mahlzeit eingetragen“,
            „Abo-Seite angesehen“).
          </li>
        </ul>

        <h2>3. Zwecke und Rechtsgrundlagen</h2>
        <ul>
          <li>
            <strong>App bereitstellen</strong> – Konto, Pläne, Tracking, Coach, Abo: Vertragserfüllung (Art. 6 Abs. 1
            lit. b DSGVO).
          </li>
          <li>
            <strong>Gesundheitsdaten</strong> – Angaben zu Körper, Beschwerden, Ernährung, Schlaf und die Werte aus
            Apple Health sind besondere Kategorien personenbezogener Daten. Wir verarbeiten sie nur mit deiner
            ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO), die du bei der Registrierung und mit der Freigabe
            in Apple Health erteilst. Du kannst sie jederzeit widerrufen: den Zugriff auf Apple Health in den
            iOS-Einstellungen entziehen oder dein Konto löschen.
          </li>
          <li>
            <strong>Benachrichtigungen</strong> – nur, wenn du sie in iOS erlaubst (Art. 6 Abs. 1 lit. a DSGVO).
          </li>
          <li>
            <strong>Nutzungsanalyse</strong> – Auswertung der Nutzungsereignisse aus Abschnitt 2, verknüpft mit deiner
            Nutzer-ID, um die App zu verbessern und Fehler zu finden. Nur mit deiner Einwilligung (Art. 6 Abs. 1 lit. a
            DSGVO, § 25 Abs. 1 TDDDG), die du im Onboarding oder in einer einmaligen Abfrage erteilst. Ohne Einwilligung
            verlässt kein Ereignis dein Gerät. Widerruf jederzeit unter Profil › Einstellungen › Nutzungsanalyse.
          </li>
          <li>
            <strong>Passwort zurücksetzen</strong> – Versand des Codes per E-Mail: Vertragserfüllung.
          </li>
        </ul>

        <h2>4. Dienstleister und Empfänger</h2>
        <p>Wir setzen folgende Dienstleister ein, die Daten nur in unserem Auftrag verarbeiten:</p>
        <ul>
          <li>
            <strong>Convex, Inc.</strong> (USA) – Datenbank, Dateispeicher und Server-Funktionen der App. Hier liegen
            dein Konto und alle Daten aus Abschnitt 2, außer Fortschrittsfotos.
          </li>
          <li>
            <strong>OpenAI, L.L.C.</strong> (USA) – KI für Trainings- und Ernährungspläne, Coach-Antworten, Briefing,
            Wochen-Check-in, Fortschrittsanalyse sowie Text- und Fotoerkennung von Mahlzeiten. Übermittelt werden die
            Daten, die die jeweilige Aufgabe braucht: zum Beispiel Profil- und Gesundheitsdaten, Trainings- und
            Ernährungsverlauf, Werte aus Apple Health, dein Vorname, deine Nachricht oder das Essensfoto.
          </li>
          <li>
            <strong>RevenueCat, Inc.</strong> (USA) – Verwaltung der Abos. Übermittelt werden deine Nutzer-ID und
            Kaufinformationen von Apple.
          </li>
          <li>
            <strong>PostHog, Inc.</strong> (Server in der EU) – Auswertung der Nutzungsereignisse, verknüpft mit deiner
            Nutzer-ID; nur mit deiner Einwilligung.
          </li>
          <li>
            <strong>Resend, Inc.</strong> (USA) – Versand der E-Mail zum Zurücksetzen des Passworts.
          </li>
          <li>
            <strong>Apple Inc.</strong> – „Mit Apple anmelden“, Käufe im App Store, Push-Benachrichtigungen und Apple
            Health. Dafür gelten zusätzlich die Datenschutzbestimmungen von Apple.
          </li>
        </ul>
        <p>
          Für die Lebensmittelsuche fragt unser Server die freien Datenbanken Open Food Facts und USDA FoodData Central
          ab. Dabei werden nur Suchbegriff oder Barcode übermittelt, keine Daten über dich.
        </p>
        <p>
          Bei Anbietern in den USA erfolgt die Übermittlung auf Grundlage des EU-US Data Privacy Framework oder der
          EU-Standardvertragsklauseln. Wir verkaufen keine Daten und nutzen sie nicht für Werbung.
        </p>

        <h2>5. Speicherdauer und Löschung</h2>
        <p>
          Wir speichern deine Daten, solange dein Konto besteht. Unter Profil › Account löschen löschst du dein Konto
          jederzeit selbst. Dabei entfernen wir sofort alle in Abschnitt 2 genannten Daten aus unserer Datenbank,
          einschließlich hochgeladener Essensfotos. Auf Anfrage per E-Mail löschen wir auch die Nutzungsereignisse bei
          PostHog. Was Capt&apos;n in Apple Health geschrieben hat, verwaltest du dort selbst. Gesetzliche
          Aufbewahrungspflichten (zum Beispiel für Belege) bleiben unberührt.
        </p>

        <h2>6. Sicherheit</h2>
        <p>
          Alle Verbindungen sind per TLS verschlüsselt. Anmelde-Token liegen in der iOS-Keychain. Passwörter speichern
          wir nur als Hash.
        </p>

        <h2>7. Keine automatisierten Entscheidungen</h2>
        <p>
          Die KI macht Vorschläge für Training und Ernährung. Es gibt keine automatisierte Entscheidung mit rechtlicher
          oder ähnlich erheblicher Wirkung im Sinne von Art. 22 DSGVO. Capt&apos;n ersetzt keine ärztliche Beratung.
        </p>

        <h2>8. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
          und Widerspruch sowie das Recht, erteilte Einwilligungen jederzeit für die Zukunft zu widerrufen. Schreib uns
          dazu an <Mail />. Außerdem kannst du dich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim
          Hessischen Beauftragten für Datenschutz und Informationsfreiheit.
        </p>

        <h2>9. Änderungen</h2>
        <p>
          Wenn sich die App oder die eingesetzten Dienste ändern, passen wir diese Erklärung an. Es gilt die jeweils
          hier veröffentlichte Fassung.
        </p>
      </div>

      <hr />

      {/* ══════════════ ENGLISH ══════════════ */}
      <div id="en">
        <h1>Privacy Policy – Capt&apos;n App</h1>
        <p>Last updated: October 28, 2026</p>
        <p>
          This policy applies to the Capt&apos;n app for iPhone and Apple Watch. The German version above is
          authoritative.
        </p>

        <h2>1. Controller</h2>
        <p>
          Erhan Kesbic
          <br />
          Seckbacher Landstraße 74
          <br />
          60389 Frankfurt am Main, Germany
          <br />
          Email: <Mail />
        </p>

        <h2>2. Data we process</h2>
        <ul>
          <li>
            <strong>Account:</strong> email address, password (stored only as a hash), optionally your name. With
            “Sign in with Apple” we receive an identifier and the email address you choose to share (optionally an
            anonymous relay address from Apple).
          </li>
          <li>
            <strong>Profile and health data:</strong> age, sex, height, weight, body fat, body measurements, fitness
            level, goals, equipment, complaints and pain areas, allergies, dietary preferences, sleep and lifestyle
            habits.
          </li>
          <li>
            <strong>Training and nutrition data:</strong> training and meal plans, workouts with sets, weights and
            effort (RIR), meals, water, goals, streaks and achievements.
          </li>
          <li>
            <strong>Content you enter:</strong> questions to the coach and meal descriptions. Food photos for image
            analysis are uploaded and stored with the meal. Progress photos stay on your device only.
          </li>
          <li>
            <strong>Apple Health (optional):</strong> with your permission the app reads steps, active energy, weight,
            resting heart rate, heart rate variability (HRV) and sleep. The Apple Watch app reads heart rate and active
            energy during a workout. Capt&apos;n writes weight, workouts and active energy back. Values read are synced
            with your account so the briefing, training readiness and plans can use them.
          </li>
          <li>
            <strong>Subscription:</strong> tier, term and purchase receipts. Payment is handled by Apple; we receive no
            payment details.
          </li>
          <li>
            <strong>Device and usage data:</strong> push token, app version, device type, language and in-app events
            (e.g. “workout completed”, “meal logged”, “paywall viewed”).
          </li>
        </ul>

        <h2>3. Purposes and legal bases</h2>
        <ul>
          <li>
            <strong>Providing the app</strong> – account, plans, tracking, coach, subscription: performance of contract
            (Art. 6(1)(b) GDPR).
          </li>
          <li>
            <strong>Health data</strong> – body, complaints, nutrition, sleep and Apple Health values are special
            categories of personal data. We process them only with your explicit consent (Art. 9(2)(a) GDPR), given at
            sign-up and when granting Apple Health access. You can withdraw it at any time by revoking Apple Health
            access in iOS Settings or deleting your account.
          </li>
          <li>
            <strong>Notifications</strong> – only if you allow them in iOS (Art. 6(1)(a) GDPR).
          </li>
          <li>
            <strong>Usage analytics</strong> – analysis of the usage events listed in section 2, linked to your user ID,
            to improve the app and fix bugs. Only with your consent (Art. 6(1)(a) GDPR, Section 25(1) TDDDG), given during
            onboarding or in a one-time prompt. Without consent no event leaves your device. Withdraw at any time under
            Profile › Settings › Usage analytics.
          </li>
          <li>
            <strong>Password reset</strong> – sending the code by email: performance of contract.
          </li>
        </ul>

        <h2>4. Service providers and recipients</h2>
        <ul>
          <li>
            <strong>Convex, Inc.</strong> (USA) – database, file storage and server functions. Holds your account and
            all data from section 2 except progress photos.
          </li>
          <li>
            <strong>OpenAI, L.L.C.</strong> (USA) – AI for training and meal plans, coach replies, briefing, weekly
            check-in, progress analysis and recognising meals from text and photos. We send what each task needs, e.g.
            profile and health data, training and nutrition history, Apple Health values, your first name, your message
            or the food photo.
          </li>
          <li>
            <strong>RevenueCat, Inc.</strong> (USA) – subscription management (user ID and Apple purchase information).
          </li>
          <li>
            <strong>PostHog, Inc.</strong> (servers in the EU) – analysis of usage events linked to your user ID; only with
            your consent.
          </li>
          <li>
            <strong>Resend, Inc.</strong> (USA) – sending password reset emails.
          </li>
          <li>
            <strong>Apple Inc.</strong> – Sign in with Apple, App Store purchases, push notifications and Apple Health;
            Apple&apos;s privacy policy applies in addition.
          </li>
        </ul>
        <p>
          For food search our server queries the open databases Open Food Facts and USDA FoodData Central, sending only
          the search term or barcode, no data about you. Transfers to US providers rely on the EU-US Data Privacy
          Framework or the EU Standard Contractual Clauses. We do not sell data or use it for advertising.
        </p>

        <h2>5. Retention and deletion</h2>
        <p>
          We keep your data for as long as your account exists. Under Profile › Delete account you can delete your
          account at any time; all data listed in section 2, including uploaded food photos, is removed from our
          database immediately. On request by email we also delete your usage events at PostHog. Data Capt&apos;n wrote to Apple
          Health is managed by you there. Statutory retention obligations remain unaffected.
        </p>

        <h2>6. Security</h2>
        <p>
          All connections are encrypted with TLS. Sign-in tokens are stored in the iOS Keychain. Passwords are stored
          only as hashes.
        </p>

        <h2>7. No automated decisions</h2>
        <p>
          The AI makes suggestions for training and nutrition. There is no automated decision with legal or similarly
          significant effect within the meaning of Art. 22 GDPR. Capt&apos;n does not replace medical advice.
        </p>

        <h2>8. Your rights</h2>
        <p>
          You have the right of access, rectification, erasure, restriction, data portability and objection, and you
          can withdraw consent at any time with effect for the future. Contact <Mail />. You may also lodge a complaint
          with a data protection supervisory authority.
        </p>

        <h2>9. Changes</h2>
        <p>We update this policy when the app or the services we use change. The version published here applies.</p>
      </div>

      <hr />
      <p>
        <a href="/app-nutzungsbedingungen">Nutzungsbedingungen der App / Terms of Use →</a>
      </p>
    </LegalPage>
  );
}

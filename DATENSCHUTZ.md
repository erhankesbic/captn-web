# Datenschutz-Konformität – Checkliste

Diese Übersicht hilft dir, die Landing Page datenschutzkonform zu betreiben (DACH/DSGVO). **Kein Rechtsrat** – bei Unsicherheit einen Anwalt konsultieren.

---

## Umgesetzt im Projekt

| Punkt | Status |
|-------|--------|
| **Datenschutzerklärung** | Seite unter `/datenschutz` mit Verantwortlicher, verarbeiteten Daten, Zweck, Empfänger (Resend, Vercel), Rechten, Kontakt. Platzhalter müssen noch ausgefüllt werden. |
| **Impressum** | Seite unter `/impressum` mit Platzhaltern für Name/Firma, Anschrift. Pflicht in DE (§ 5 TMG). |
| **Einwilligung im Formular** | Checkbox „Datenschutzerklärung gelesen und akzeptiert“ (Pflicht) vor Absenden. Link zur Datenschutzerklärung. |
| **Links** | Impressum und Datenschutz im Footer (Kontakt-Sektion) verlinkt. |
| **Hinweis unter dem Formular** | Kurzer Verweis auf die Datenschutzerklärung. |

---

## Was du noch manuell machen solltest

1. **Impressum ausfüllen**  
   In [app/impressum/page.tsx](app/impressum/page.tsx) die Platzhalter ersetzen: Name/Firma, vollständige Anschrift. Bei Gewerbe ggf. USt-IdNr., Registergericht, Vertretungsberechtigte ergänzen.

2. **Datenschutzerklärung anpassen**  
   In [app/datenschutz/page.tsx](app/datenschutz/page.tsx): Verantwortlicher wie im Impressum, Datum setzen. Prüfen, ob alle genannten Dienste (Resend, Vercel) und ggf. weitere (Analytics etc.) zutreffen und ggf. ergänzen.

3. **Rechtliche Prüfung**  
   Die Texte sind Muster. Für verbindliche Rechtssicherheit Impressum und Datenschutzerklärung von einem Anwalt prüfen lassen.

4. **Resend / Drittländer**  
   Resend kann Daten in den USA verarbeiten. In der Datenschutzerklärung ist das angesprochen. Optional: Bei Resend prüfen, ob EU-Region/Standardvertragsklauseln genutzt werden und ggf. in der Datenschutzerklärung konkretisieren.

5. **Analytics / Cookies**  
   Aktuell keine Analytics/Cookies. Wenn du später z. B. Vercel Analytics oder Plausible einbaust: in der Datenschutzerklärung erwähnen und ggf. Einwilligung (Cookie-Banner) vorsehen.

---

## Kurzüberblick

- **Impressum** und **Datenschutzerklärung** sind vorhanden und verlinkt.
- Das **Beta-Formular** verlangt eine **Einwilligung** (Checkbox mit Link zur Datenschutzerklärung).
- Du musst die **Platzhalter ausfüllen** und die Texte **rechtlich prüfen** lassen.

# Capt'n – Website

Landingpage für die App Capt'n (getcaptn.de, getcaptn.com leitet weiter). Next.js, TypeScript, Tailwind. Gehostet bei Vercel; jeder Push auf `main` geht live.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # vor jedem Push
```

## Was wo steht

- `lib/site.ts` – App-Store-Link, Support-Adresse, **Preise und Abo-Limits**. Preise kommen aus App Store Connect, Limits aus `SubscriptionFeatureMatrix.swift` in der App. Ändert sich dort etwas, hier nachziehen.
- `app/page.tsx` – Startseite mit allen Texten.
- `app/app-datenschutz`, `app/app-nutzungsbedingungen` – werden aus der App heraus verlinkt. Adressen nicht ändern.
- `public/screens`, `public/gallery`, `public/watch` – echte App-Screens als WebP (Quelle: `Captn/app_store_connect` und `Captn/marketing_ads/_shared/app_screens`).

## Design

Gleiche Sprache wie die App („Obsidian“): Fläche `#08090E`, Akzent `#28E8C4`, Hairlines, Überschriften in SF Pro Rounded (Fallback Nunito). Tokens in `app/globals.css`.

Keine Cookies, kein Tracking, keine Drittanbieter-Einbindungen. Wer das ändert, muss Datenschutzerklärung und ggf. Einwilligung nachziehen.

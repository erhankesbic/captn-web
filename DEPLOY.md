# Captn Landing Page – Veröffentlichen

Diese Anleitung führt dich durch GitHub, Vercel und IONOS. Alles, was automatisch vorbereitet werden konnte, ist erledigt – unten steht **genau, was du manuell machen musst**.

---

## Was bereits erledigt ist

- Projekt ist commit-ready (alle Dateien sind gestaged/committed).
- `.env.local` wird nicht ins Repo übernommen (dein Resend-Key bleibt lokal).
- Build läuft (Next.js + API-Route).

---

## 1. GitHub – Repo anlegen und Code pushen

### 1.1 Repo auf GitHub erstellen

1. Gehe zu **https://github.com/new**
2. **Repository name:** z. B. `captn-web`
3. **Public** auswählen, **keine** README, .gitignore oder License hinzufügen (haben wir schon).
4. Auf **Create repository** klicken.

### 1.2 Lokal pushen

Im Terminal im Projektordner (CaptnWeb):

```bash
cd "/Users/erhankesbic/TheClapp - Projekte/CaptnWeb"

git remote add origin https://github.com/DEIN_GITHUB_USERNAME/captn-web.git
git push -u origin main
```

**Ersetze `DEIN_GITHUB_USERNAME`** durch deinen GitHub-Benutzernamen.  
Falls du das Repo anders genannt hast, den Repo-Namen in der URL anpassen.

---

## 2. Vercel – Projekt deployen

### 2.1 Projekt importieren

1. Gehe zu **https://vercel.com** und melde dich an (am besten mit **GitHub**).
2. **Add New…** → **Project**.
3. Wähle das Repo **captn-web** (oder deinen Namen) aus der Liste.
4. **Import** klicken.

### 2.2 Umgebungsvariable setzen

Vor dem ersten Deploy:

1. Unter **Environment Variables** auf **Add** klicken.
2. **Name:** `RESEND_API_KEY`
3. **Value:** dein Resend API Key (z. B. `re_d3cJjp3T_...` aus deiner `.env.local`).
4. **Environment:** Production (und ggf. Preview) auswählen.
5. Speichern.

### 2.3 Deploy starten

Auf **Deploy** klicken. Nach 1–2 Minuten hast du eine URL wie:

`https://captn-web-xxxx.vercel.app`

Diese URL funktioniert sofort; das Beta-Formular sendet E-Mails, sobald `RESEND_API_KEY` gesetzt ist.

---

## 3. Eigene Domain (getcaptn.de / getcaptn.com) bei Vercel eintragen

1. In Vercel: dein **Projekt** öffnen.
2. Oben **Settings** → links **Domains**.
3. **Add** klicken:
   - `getcaptn.de` eintragen → **Add**.
   - Nochmal **Add** → `getcaptn.com` eintragen → **Add**.

Vercel zeigt dir pro Domain an, was du im DNS eintragen sollst (meist **CNAME** oder **A**). Diese Werte brauchst du für IONOS.

---

## 4. IONOS – DNS einstellen

1. Bei IONOS einloggen → **Domains** → deine Domain (getcaptn.de bzw. getcaptn.com) auswählen.
2. Zu **DNS / DNS-Einträge / Verwaltung** (je nach IONOS-Oberfläche ähnlich) gehen.

### Option A: Nur mit „www“ (z. B. www.getcaptn.de)

| Typ   | Name/Host | Ziel/Wert              |
|-------|------------|------------------------|
| CNAME | www        | `cname.vercel-dns.com` |

Dann in Vercel unter Domains ggf. **www.getcaptn.de** hinzufügen (nicht nur getcaptn.de).

### Option B: Domain ohne „www“ (getcaptn.de direkt)

Vercel gibt dir unter **Domains** für die Apex-Domain einen **A-Record** vor, z. B.:

| Typ | Name/Host | Ziel/Wert   |
|-----|------------|-------------|
| A   | @          | 76.76.21.21 |

**Genau den Wert verwenden, den Vercel für deine Domain anzeigt.**

- Für **getcaptn.de**: dieselben Schritte mit getcaptn.de.
- Für **getcaptn.com**: dieselben Schritte mit getcaptn.com (gleiches Vercel-Projekt, beide Domains hinzufügen).

Nach dem Speichern: DNS-Änderungen können **5–60 Minuten** dauern. Danach läuft die Seite unter getcaptn.de und getcaptn.com. SSL (HTTPS) richtet Vercel automatisch ein.

---

## Kurz-Checkliste

- [ ] GitHub: Repo erstellt, `git remote add origin …` und `git push` ausgeführt.
- [ ] Vercel: Projekt aus GitHub importiert, `RESEND_API_KEY` gesetzt, Deploy durchgelaufen.
- [ ] Vercel: Domains `getcaptn.de` und `getcaptn.com` unter Settings → Domains hinzugefügt.
- [ ] IONOS: DNS-Einträge (CNAME oder A) wie von Vercel angezeigt für beide Domains gesetzt.
- [ ] Nach ein paar Minuten: https://getcaptn.de und https://getcaptn.com testen und Beta-Formular einmal absenden (E-Mail an support@getcaptn.com prüfen).

Wenn etwas an einer Stelle hakt, sag Bescheid (z. B. welcher Schritt und welche Fehlermeldung).

# Screen-Zuordnung (Bild ↔ Text)

Die App-Screenshots liegen als `1.svg` … `14.svg` in `public/captn-previews/`.

Damit **Bild und Text** auf der Seite zusammenpassen, musst du in **`screens.ts`** eintragen, welche Nummer welchen App-Bereich zeigt:

1. Öffne nacheinander `public/captn-previews/1.svg` … `14.svg` im Browser (oder schau in der App, welcher Screen welcher ist).
2. Notiere dir: Welche Nummer zeigt Dashboard? Training? Ernährung/Food Scan? Chat? Profil? Die vier Schritte (Profil erstellen, Tracking, Coach, Ergebnisse)?
3. Trage die richtigen Nummern in `screens.ts` ein (z. B. `dashboard: 1`, `training: 3`, … – je nachdem, was du siehst).

Nach dem Anpassen von `screens.ts` stimmen die Bilder in Hero, Features, How it Works und der Galerie mit den Texten überein.

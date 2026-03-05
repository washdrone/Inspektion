# SurveyDrone Sverige AB — Webbplats Prompt

Du bygger webbplatsen surveydrone.se för SurveyDrone Sverige AB — professionell drönare-inspektion med termisk kamera, PDRA S-01-certifiering och rikstäckande verksamhet.

**Teknisk plattform:** Next.js med SSR eller WordPress. Ingen SPA utan SSR — Google måste kunna läsa HTML direkt.

**Varumärke:** Professionell, teknisk, direkt ton. Primärfärg marinblå (#1B3A6B), sekundär stålblå (#2E7D9F), accent amber (#E8A020). Inga floskler.

**Utrustning kommuniceras generellt** — nämn aldrig specifika modeller. Använd: "branschledande termisk kamera", "fullradiometrisk datainsamling", "RTK/GNSS-positionering med centimeternoggrannhet", "kommersiell inspektionsklass-UAV".

---

## Sidstruktur

Startsida, 8 tjänstesidor (/tjanster/takinspektion/, fasadinspektion/, solcellsinspektion/, termisk-inspektion/, fuktinspektion/, industriinspektion/, vindkraftinspektion/, 3d-kartlaggning/), 6 branschsidor (/branscher/fastighet/, energi/, industri/, kommuner/, forsakring/, bygg/), 10 stadssidor (/platser/inspektion-[stad]/ för Stockholm, Göteborg, Malmö, Uppsala, Linköping, Örebro, Västerås, Helsingborg, Norrköping, Umeå), plus /hur-det-gar-till/, /priser/, /forvaltningsavtal/, /ordlista/, /kontakt/, /om-oss/.

---

## Hur det går till

Finns som prominent sektion på startsidan OCH som egen sida. Visualisera som ett klickbart 5-stegsdiagram:

1. **Offertförfrågan** — svar inom 24h
2. **Planering** — luftrumskontroll, ni behöver inte vara på plats
3. **Flygning** — 1–4 timmar beroende på objekt
4. **Analys** — alla avvikelser georefereras och prioritetsklassas
5. **Rapport** — professionell PDF inom 48 timmar

---

## Prisguide (/priser/)

Publicera inte fasta priser. Förklara prismodellen: objektets yta, antal våningsplan, typ av inspektion (visuell/termisk/kombinerad), leverabler, restid. Lägg in indikativa intervall per tjänst — dessa fylls i av kunden baserat på verklig kalkyl. Jämförelsetabell drönare vs traditionell metod — inkludera bara siffror kunden faktiskt vet från egna erfarenheter, inga antaganden.

---

## Förvaltningsavtal (/forvaltningsavtal/)

Egen sida. Kärnargument: avvikelser syns bäst över tid, samma fastighet inspekterad tre år i rad berättar en historia. Innehåll: vad som ingår (förbokad inspektion 1–2 ggr/år, historisk jämförelse av fynd, fast pris), passar för BRF/fastighetsbolag/kommuner/energibolag.

---

## Ordlista (/ordlista/)

12 termer förklarade för beslutsfattare (inte ingenjörer): hotspot, termisk imaging/IRT, radiometrisk kamera, NDVI, ortofoto, fotogrammetri, PDRA S-01, köldbrygga, GSD, ΔT, emissivitet, RTK-positionering. DefinedTerm schema markup på varje term. Alfabetisk ordning med ankarlänkar.

---

## Live-visning

Lägg till som kort sektion (3–4 meningar) på tjänstesidor: kund kan följa inspektionen i realtid via säker länk, passar vid distansförvaltning. Ingen egen sida.

---

## Branschsidor

Anpassat språk per köpare. Fastighetsförvaltare och energichefer pratar inte samma språk. Varje sida: ingress på köparens språk, relevanta use cases, typiska frågeställningar vi löser, leverabler, branschspecifik FAQ, anpassad CTA.

---

## Stadssidor

Unik lokal text per stad, inte bara namnbyte. Nämn specifika stadsdelar, industriområden eller fastighetstyper. LocalBusiness schema med geo-koordinater.

---

## Case studies

Inga riktiga ännu. Ersätt med scenario-baserade beskrivningar: "Hur en typisk BRF-inspektion går till", "Vad händer när vi hittar en hotspot i en solcellspark".

---

## SEO — gäller varje sida

- Title: 50–60 tecken, primärt sökord först
- Meta description: 150–160 tecken, sökord inkluderat, tydlig CTA
- Exakt en H1 per sida med primärt sökord
- Canonical och hreflang sv/sv-SE på alla sidor
- Alt-texter på alla bilder
- Minst 3–5 interna länkar per sida
- XML-sitemap automatgenererad
- robots.txt blockerar ej crawlers

---

## Schema markup

- **Organization** — startsidan
- **Service** — alla tjänstesidor
- **FAQPage** — alla sidor med FAQ-sektion
- **LocalBusiness** — stadssidor
- **DefinedTerm** — varje term i ordlistan
- **BreadcrumbList** — alla undersidor

---

## FAQ prioriterade för AEO

Dessa frågor ska ha FAQPage schema markup och vara optimerade för att citeras av AI-sökmotorer:

- Hur fungerar drönare-inspektion med termisk kamera?
- Vad kostar drönare-inspektion?
- Hur lång tid tar en takinspektion?
- Behöver jag vara på plats under inspektionen?
- Vad ingår i inspektionsrapporten?
- Vad är PDRA S-01 och varför är det viktigt?
- Hur snabbt kommer rapporten?
- Går det att inspektera på vintern?
- Kan drönare hitta fukt i tak?
- Hur hittar man hotspots i solceller med drönare?

---

## Bygg inte (ännu)

- Exempelrapport
- Certifieringssida — vänta tills PDRA S-01 är beviljat
- Blogg — fas 2
- Kundcase — vänta på riktiga uppdrag

---

## Tekniska krav

- Core Web Vitals: LCP < 2,5s, INP < 100ms, CLS < 0,1
- HTTPS, WebP-bilder, lazy loading
- Fullt mobilresponsiv (Google indexerar mobile-first)
- Anpassad 404-sida med navigation

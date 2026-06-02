# SEO-CHECKLIST — surveydrone.se

Status för teknisk SEO och indexerbarhet. Kanonisk form: **https://www.surveydrone.se**
(Vercel 301-redirectar non-www → www). All canonical/OG/intern länkning använder www-formen.

> **Viktig observation om stacken:** Repot är ett **Next.js 14-projekt (App Router)**,
> inte en React/Vite-SPA. Det betyder att sidorna server-renderas/prerenderas till färdig
> HTML redan i bygget — grundproblemet med "tom HTML till crawlers" finns alltså inte här.
> Varje publik rutt byggs som statisk HTML (`○ (Static)` i `next build`).

---

## ✅ Klart (verifierat i koden / i byggd HTML)

### Steg 1 — Rendering
- [x] Next.js App Router renderar varje publik rutt till färdig HTML (SSG). Verifierat att
      H1, title, meta, brödtext och JSON-LD finns i råkällan (`.next/server/app/**.html`),
      inte bara efter JS-körning.
- [x] Tjänstesidor, branschsidor, platssidor och toppsidor prerenderas statiskt.

### Steg 2 — Canonical
- [x] `<link rel="canonical">` sätts per sida till absolut **https://www-URL** via
      `createMetadata()` i `src/lib/metadata.ts`.
- [x] `metadataBase` satt till `https://www.surveydrone.se` i root-layouten.
- [x] HTTPS och konsekvent (trailing-slash-fri) URL-form.

### Steg 3 — Per-sida metadata
- [x] Unik `title` och `meta description` per rutt (`createMetadata`).
- [x] Open Graph (title, description, url, siteName, locale, type).
- [x] **Twitter Card** (`summary_large_image`) tillagd i `createMetadata`.
- [x] `lang="sv"` på `<html>` (root-layout) och `lang`-hantering för `/en`.
- [x] hreflang/alternates mellan sv och en där `alternateLocalePath` anges.

### Steg 4 — JSON-LD (i renderad HTML)
- [x] **Organization** (`ProfessionalService`): namn, **logo**, `areaServed: SE`,
      e-post, EASA-credential. **Inget `sameAs`**, ingen gatuadress/geo.
- [x] **WebSite**.
- [x] **Service** per tjänst med konfigurerbar `serviceType` och `areaServed: SE`.
- [x] **BreadcrumbList** (via `Breadcrumbs`-komponenten).
- [x] **FAQPage** på sidor med vanliga frågor.

### Steg 5 — Crawl/indexering
- [x] Dynamisk `sitemap.xml` (`src/app/sitemap.ts`) med alla publika URL:er + `lastmod`.
      Nya mät-/3D-sidor tillagda. `lastModified` uppdaterad.
- [x] `robots.txt` (`src/app/robots.ts`) tillåter crawl, blockerar `/api/`, pekar på sitemap.
- [x] Ingen `noindex` kvar på publika sidor (`robots`-fältet sätts bara när `noIndex: true`).

### Steg 6 — Innehåll & tjänstetexter (mätning & 3D)
Tre nya dedikerade landningssidor, var och en med unikt innehåll, primärt sökord i
H1 + slug + första 100 orden, logisk H2/H3-hierarki, FAQ (AEO) och FAQPage-schema:
- [x] **Drönarinmätning** — `/tjanster/dronarinmatning` (SWEREF 99 / RH 2000, noggrannhet,
      leveransformat: punktmoln, DWG, 3D).
- [x] **Volymberäkning** — `/tjanster/volymberakning` (upplag, täkter, schakt; hur volymen
      beräknas och redovisas; differens över tid).
- [x] **Fotogrammetri & 3D-modell** — `/tjanster/fotogrammetri-3d-modell` (punktmoln och
      3D-modeller som mätresultat och beslutsunderlag).
- [x] Nya sidor inlänkade i huvudnavigation/footer (`SERVICE_LINKS`) och korslänkade via
      `RelatedServices`.
- [x] Nationella signaler ("i hela Sverige", "rikstäckande") — ingen ort, ingen adress.
- [x] Ortofoto nämns endast neutralt som delsteg — ingen egen sida/H1/säljargument.

### Steg 7 — Prestanda
- [x] `preconnect` till `fonts.googleapis.com` och `fonts.gstatic.com`; Google Fonts med
      `&display=swap`.
- [x] Automatisk code-splitting per rutt (Next.js). Nya sidor ~1.1 kB sidkod.
- [x] `next.config.js` konfigurerad för AVIF/WebP (`images.formats`).
- [x] Långa cache-headers för statiska assets (`vercel.json`).
- [x] Mät-/3D-sidorna är textbaserade (SVG-ikoner, inga rastertunga hjältebilder) → låg LCP-risk.

---

## 🔲 Återstår / rekommenderas (kräver beslut eller redaktionellt innehåll)

- [ ] **Positioneringsbeslut (ägaren):** Repot innehåller även ett stort
      *inspektions*-revir (tak, fasad, solceller, termisk, industri, plats-/stadssidor).
      De nya mät-/3D-sidorna är tillagda **additivt** vid sidan av dessa — inget har tagits
      bort. Avgör om sajten ska renodlas mot mätning & 3D eller behålla båda reviren.
- [ ] **OG-/Twitter-bild:** Ingen delningsbild (`og:image`) är satt. Lägg till en
      brandad 1200×630-bild när sådan finns, annars visas länkkort utan bild.
- [ ] **Plats-/stadssidor använder `LocalBusiness` med geo** (`localBusinessSchemaSv`).
      Steg 4 i uppdraget förordar *ingen* LocalBusiness/adress/geo. Dessa sidor lämnades
      orörda för att inte skada befintlig SEO — gör ett medvetet val om de ska behållas.
- [ ] **Reveal-animation (`useReveal`)** renderar sektioner med `opacity:0` tills JS kör.
      Texten finns i HTML (bra för crawlers) men är dold utan JS och kan påverka upplevd
      LCP. Site-brett mönster — överväg att rendera synligt som default.
- [ ] **Fonts via `<link>` i layout** ger en ESLint-varning (`no-page-custom-font`).
      Överväg `next/font` (self-hosting) för att ta bort render-blockerande extern CSS.
- [ ] **Verifiera faktauppgifter** enligt `CLAUDE.md`: noggrannhetspåståenden
      ("centimeternivå") och leveransformat ska stämma med vad SurveyDrone faktiskt levererar.
      Justera vokabulär om annat koordinat-/höjdsystem än SWEREF 99 / RH 2000 används.

---

## 🧭 Manuella steg i Google Search Console (ägaren gör själva)

1. **Lägg till och verifiera egenskaper:**
   - Domän-egenskap `surveydrone.se` (DNS-verifiering) — täcker alla subdomäner/protokoll.
   - URL-prefix-egenskap `https://www.surveydrone.se` (den kanoniska www-versionen).
2. **Skicka in sitemap:** Sitemaps → lägg till `https://www.surveydrone.se/sitemap.xml`.
3. **URL-inspektion + begär indexering** på de viktigaste sidorna:
   - Startsidan `/`
   - `/tjanster/dronarinmatning`
   - `/tjanster/volymberakning`
   - `/tjanster/fotogrammetri-3d-modell`
   - `/tjanster/3d-kartlaggning`
   Klistra in URL → "Begär indexering" för var och en.
4. **Kontrollera "Sidor"-rapporten** efter någon vecka: bekräfta att non-www
   redirectar till www och att inga viktiga sidor är "Upptäckt – inte indexerad".
5. **Bekräfta kanonisering:** i URL-inspektion ska "Googles valda kanoniska" peka på
   www-URL:en.
6. (Valfritt) Koppla **Bing Webmaster Tools** och importera från Search Console.

---

_Uppdaterad i samband med tillägg av mät-/3D-landningssidor och SEO-infrastruktur._

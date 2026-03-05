import type { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata'
import { serviceSchema, faqSchema } from '@/lib/schema'
import { Hero } from '@/components/Hero'
import { TrustBar } from '@/components/TrustBar'
import { BenefitsGrid } from '@/components/BenefitsGrid'
import { ProcessSteps } from '@/components/ProcessSteps'
import { Deliverables } from '@/components/Deliverables'
import { FaqAccordion } from '@/components/FaqAccordion'
import { CtaBand } from '@/components/CtaBand'
import { RelatedServices } from '@/components/RelatedServices'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = createMetadata({
  title: 'Takinspektion med drönare och termisk kamera',
  description:
    'Professionell takinspektion med drönare och termisk kamera. Upptäck läckor, skador och isoleringsbrister utan ställning. EASA-certifierade piloter. Hela Sverige.',
  path: '/tjanster/takinspektion',
})

const faqItems = [
  {
    question: 'Hur går en takinspektion med drönare till?',
    answer:
      'Vi flyger en kommersiell inspektionsklass-UAV över taket och samlar in högupplösta bilder samt termiska data. Hela inspektionen genomförs utan ställning eller skylift, vilket minimerar störningar och risker.',
  },
  {
    question: 'Vilka typer av tak kan inspekteras?',
    answer:
      'Vi inspekterar alla typer av tak — platta tak, sadeltak, pulpettak, gröna tak och industritak. Metoden fungerar på allt från bostadsrättsföreningar till stora industrianläggningar.',
  },
  {
    question: 'Kan ni upptäcka fuktskador med termisk kamera?',
    answer:
      'Ja, termisk kamera kan identifiera områden med avvikande temperatur som indikerar fuktinträngning, bristande isolering eller dolda läckor under takytan.',
  },
  {
    question: 'Hur snabbt får vi rapporten efter inspektionen?',
    answer:
      'Normalt levererar vi en komplett rapport med analyser och rekommendationer inom några arbetsdagar efter genomförd inspektion. Kontakta oss för exakta leveranstider.',
  },
  {
    question: 'Behövs det tillstånd för att flyga drönare över fastigheten?',
    answer:
      'Våra piloter är EASA-certifierade och hanterar alla nödvändiga tillstånd och flygplaner. Vi säkerställer att alla flygningar sker i enlighet med gällande regelverk.',
  },
  {
    question: 'Är takinspektion med drönare säkrare än traditionell inspektion?',
    answer:
      'Ja, drönare eliminerar behovet av att personal vistas på taket, vilket avsevärt minskar risken för fallolyckor. Dessutom krävs ingen ställning eller skylift.',
  },
  {
    question: 'Hur ofta bör man genomföra takinspektion?',
    answer:
      'Vi rekommenderar regelbundna inspektioner för att fånga upp skador tidigt. Kontakta oss för att diskutera ett inspektionsintervall som passar er fastighetsportfölj.',
  },
  {
    question: 'Kan vi följa inspektionen i realtid?',
    answer:
      'Ja, vi erbjuder live-visning via en säker länk så att ni kan följa inspektionen i realtid, oavsett var ni befinner er.',
  },
]

export default function TakinspektionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Takinspektion med drönare',
              description:
                'Professionell takinspektion med drönare och termisk kamera. Upptäck läckor, skador och isoleringsbrister utan ställning.',
              url: '/tjanster/takinspektion',
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <Breadcrumbs
        items={[
          { name: 'Hem', url: '/' },
          { name: 'Takinspektion', url: '/tjanster/takinspektion' },
        ]}
      />

      <Hero
        headline="Takinspektion med drönare och termisk kamera"
        subheadline="Identifiera läckor, fuktskador och isoleringsbrister utan ställning eller skylift. Våra EASA-certifierade piloter genomför noggranna takinspektioner med fullradiometrisk datainsamling — snabbt, säkert och kostnadseffektivt."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Se hur det fungerar', href: '#process' }}
      />

      <TrustBar
        items={[
          'EASA-certifierade piloter',
          'Ansvarsförsäkrade',
          'Hela Sverige',
          'Termisk kamera',
        ]}
      />

      <BenefitsGrid
        headline="Fördelarna med drönarbaserad takinspektion"
        subtitle="Snabbare, säkrare och mer detaljerad inspektion jämfört med traditionella metoder."
        benefits={[
          {
            icon: 'shield',
            title: 'Ökad säkerhet',
            description:
              'Ingen personal behöver vistas på taket. Eliminerar risken för fallolyckor och behovet av ställning.',
          },
          {
            icon: 'clock',
            title: 'Snabbare genomförande',
            description:
              'En komplett takinspektion genomförs på en bråkdel av tiden jämfört med manuella metoder.',
          },
          {
            icon: 'camera',
            title: 'Termisk analys',
            description:
              'Branschledande termisk kamera avslöjar dolda fuktskador, läckor och isoleringsbrister som inte syns med blotta ögat.',
          },
          {
            icon: 'chart',
            title: 'Detaljerad dokumentation',
            description:
              'Högupplösta bilder och termiska kartor ger ett komplett beslutsunderlag för underhållsplanering.',
          },
          {
            icon: 'building',
            title: 'Alla taktyper',
            description:
              'Platta tak, sadeltak, industritak eller gröna tak — vår metod fungerar på alla typer av byggnader.',
          },
          {
            icon: 'file',
            title: 'Tydliga rapporter',
            description:
              'Varje inspektion resulterar i en överskådlig rapport med prioriterade åtgärdsförslag.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så genomförs en takinspektion"
        steps={[
          {
            number: 1,
            title: 'Kontakt & planering',
            description:
              'Vi diskuterar era behov, gör en riskbedömning och planerar flygningen efter fastighetens förutsättningar.',
          },
          {
            number: 2,
            title: 'Flygning & datainsamling',
            description:
              'Våra EASA-certifierade piloter genomför flygningen med kommersiell inspektionsklass-UAV och termisk kamera.',
          },
          {
            number: 3,
            title: 'Analys & bearbetning',
            description:
              'Vi analyserar alla bilder och termiska data för att identifiera skador, fukt och avvikelser.',
          },
          {
            number: 4,
            title: 'Rapport & leverans',
            description:
              'Ni får en tydlig rapport med bilder, termogrammer och prioriterade åtgärdsrekommendationer.',
          },
        ]}
      />

      {/* Live-visning */}
      <section className="section-padding">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading-lg sm:text-display">Följ inspektionen i realtid</h2>
            <p className="mt-6 text-body-lg text-dark-500">
              Med vår live-visningstjänst kan ni följa hela takinspektionen i realtid via en säker
              länk. Perfekt för fastighetsförvaltare som hanterar fastigheter på distans eller vill
              involvera flera beslutsfattare utan att alla behöver vara på plats. Ni ser exakt vad
              drönaren ser och kan ställa frågor till piloten under flygningen.
            </p>
          </div>
        </div>
      </section>

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: 'Högupplösta flygbilder',
            description:
              'Detaljerade RGB-bilder av hela takytan, inklusive närbilder av identifierade skador.',
          },
          {
            title: 'Termiska kartor',
            description:
              'Fullradiometriska termogrammer som visar temperaturfördelning och avvikelser.',
          },
          {
            title: 'Skadeklassificering',
            description:
              'Varje identifierat problem klassificeras efter allvarlighetsgrad och prioritet.',
          },
          {
            title: 'Åtgärdsrekommendationer',
            description:
              'Konkreta förslag på åtgärder baserade på analysens resultat.',
          },
          {
            title: 'Digital rapport',
            description:
              'Komplett inspektionsrapport i PDF-format med sammanfattning och detaljbilagor.',
          },
          {
            title: 'Kartöverlägg',
            description:
              'Georefererade bilder som kan användas i ert fastighetssystem.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om takinspektion" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fasadinspektion',
            href: '/tjanster/fasadinspektion',
            description:
              'Inspektion av fasader och byggnadsskal med högupplöst kamera och termisk analys.',
          },
          {
            title: 'Fuktinspektion',
            href: '/tjanster/fuktinspektion',
            description:
              'Avancerad fuktdetektering med termisk kamera för att hitta dolda fuktproblem.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Termisk inspektion av solcellsanläggningar för att identifiera defekta paneler.',
          },
        ]}
      />

      <CtaBand
        headline="Boka en takinspektion idag"
        description="Kontakta oss för en kostnadsfri konsultation och offert anpassad efter era behov."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}

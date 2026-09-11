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
import { KnowledgeLinks } from '@/components/KnowledgeLinks'

export const metadata: Metadata = createMetadata({
  title: "Takinspektion med drönare – rapport och offert",
  description:
    "Dokumentera takets skick med drönare. Få bilder, markerade avvikelser och underlag för fortsatt underhåll. Beskriv fastigheten och begär offert.",
  path: '/tjanster/takinspektion',
})

const faqItems = [
  {
    "question": "Hur går en takinspektion till?",
    "answer": "Vi stämmer av vilka takytor och frågor som ingår, planerar flygningen och samlar in bilder. Termisk inspektion planeras efter uppdragets behov och lämpliga förhållanden. Materialet analyseras och sammanställs i en rapport."
  },
  {
    "question": "Vad visar en termisk takinspektion?",
    "answer": "Temperaturavvikelser kan indikera exempelvis fukt eller isoleringsbrister. De behöver tolkas utifrån material och förhållanden. Rapporten kan peka ut områden för vidare undersökning; en värmebild ensam fastställer inte alltid orsaken."
  },
  {
    "question": "Vad ingår i rapporten?",
    "answer": "Rapportens innehåll bestäms i offerten. Bilddokumentation, markerade avvikelser och rekommenderad uppföljning beskrivs tillsammans med eventuell termisk analys, kartöverlägg och övriga leveranskrav."
  },
  {
    "question": "Kan rapporten användas i underhållsplanen?",
    "answer": "Rapporten ger dokumentation av synligt skick och fynd som kan användas i underhållsplaneringen. Den ersätter inte eventuella kompletterande undersökningar, dimensionering eller projektering av en åtgärd."
  },
  {
    "question": "Behöver vi vara på plats?",
    "answer": "Tillträde, kontaktperson och eventuell medverkan stäms av under planeringen. Behovet beror på fastigheten och uppdragets omfattning."
  },
  {
    "question": "Vad händer vid olämpligt väder?",
    "answer": "Flygning och eventuell termografi behöver lämpliga förhållanden. Tidpunkt och behov av omplanering stäms av för uppdraget."
  },
  {
    "question": "Vad styr pris och leveranstid?",
    "answer": "Takets storlek, tillgänglighet, plats, metod och rapportens omfattning påverkar upplägget. Ange adress, ungefärlig takyta, ert problem och önskad tidpunkt. Pris och tidplan anges i offerten."
  }
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
                "Få en dokumenterad överblick över takets synliga skick och områden som behöver undersökas närmare. Vi samlar in högupplösta bilder och, när uppdrag och förhållanden medger det, termiska data. Ni får en rapport med markerade avvikelser och rekommendationer för fortsatt uppföljning.",
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
        headline="Takinspektion med drönare – underlag för nästa underhållsbeslut"
        subheadline="Få en dokumenterad överblick över takets synliga skick och områden som behöver undersökas närmare. Vi samlar in högupplösta bilder och, när uppdrag och förhållanden medger det, termiska data. Ni får en rapport med markerade avvikelser och rekommendationer för fortsatt uppföljning."
        ctaPrimary={{ label: "Begär offert på takinspektion", href: '/kontakt?service=takinspektion' }}
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

      <Deliverables
        image="takinspektion"
        headline="Leveransens delar – omfattning enligt offert"
        items={[
          {
            title: 'Högupplösta flygbilder',
            description:
              'RGB-bilder av överenskomna, synliga takytor med närbilder av identifierade avvikelser.',
          },
          {
            title: 'Termiska kartor',
            description:
              'När termografi ingår: termogram som visar temperaturfördelning och markerade avvikelser.',
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
              'Georeferering och format för ert fastighetssystem stäms av i offerten.',
          },
        ]}
      />

      <BenefitsGrid
        headline="Fördelarna med drönarbaserad takinspektion"
        subtitle="Bilddokumentation som hjälper förvaltare och fastighetsägare att prioritera nästa steg."
        benefits={[
          {
            icon: 'shield',
            title: 'Ökad säkerhet',
            description:
              'Datainsamling från luften minskar behovet av takåtkomst. Kompletterande undersökningar kan ändå kräva tillträde.',
          },
          {
            icon: 'clock',
            title: 'Snabbare genomförande',
            description:
              'Svåråtkomliga takytor kan dokumenteras från luften. Tidsåtgången bedöms efter objekt och omfattning.',
          },
          {
            icon: 'camera',
            title: 'Termisk analys',
            description:
              'Termiska data kan visa temperaturavvikelser som behöver tolkas och vid behov undersökas vidare.',
          },
          {
            icon: 'chart',
            title: 'Detaljerad dokumentation',
            description:
              'Bilder och markerade avvikelser ger dokumenterat underlag för underhållsplanering och fortsatt undersökning.',
          },
          {
            icon: 'building',
            title: 'Anpassat till fastigheten',
            description:
              'Takets utformning, material och siktförhållanden styr vad som går att dokumentera.',
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
        id="process"
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
              'Termisk undersökning av avvikelser som kan indikera fukt och behöva följas upp.',
          },
          {
            title: 'Solcellsinspektion',
            href: '/tjanster/solcellsinspektion',
            description:
              'Termisk inspektion av solcellsanläggningar för att identifiera defekta paneler.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'sa-gar-en-takinspektion-till',
          'stormskador-pa-tak-dokumentation',
          'taksakerhet-vid-inspektion-och-underhall',
        ]}
      />

      <CtaBand
        headline="Få underlag för takets nästa underhållsbeslut"
        description="Kontakta oss för en kostnadsfri konsultation och offert anpassad efter era behov."
        ctaLabel="Begär offert på takinspektion"
        ctaHref="/kontakt?service=takinspektion"
      />
    </>
  )
}

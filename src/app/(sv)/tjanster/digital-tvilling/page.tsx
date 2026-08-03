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
  title: 'Digital tvilling av byggnader och anläggningar med drönare',
  description:
    'En digital tvilling är en måttriktig kopia av objektet som byggs om vid återkommande flygningar och speglar nuläget. Jämför datum, följ produktionen och dokumentera anläggningen. Hela Sverige.',
  path: '/tjanster/digital-tvilling',
})

const faqItems = [
  {
    question: 'Vad är en digital tvilling?',
    answer:
      'En digital tvilling är en digital, måttriktig kopia av en byggnad eller anläggning som hålls uppdaterad över tid. Den byggs om vid återkommande flygningar så att den speglar nuläget i stället för att frysa ett enda tillfälle. Varje uppdatering sparas, vilket gör att objektets utveckling går att följa datum för datum.',
  },
  {
    question: 'Vad skiljer den från en vanlig 3D-modell?',
    answer:
      'En vanlig 3D-modell är en ögonblicksbild — korrekt den dag den mättes in och successivt mindre aktuell därefter. En digital tvilling uppdateras enligt en överenskommen rytm och behåller historiken, så att både nuläget och förändringen mellan mättillfällen kan avläsas. Skillnaden ligger i uppdateringen, inte i själva modelltekniken.',
  },
  {
    question: 'Hur ofta behöver den uppdateras?',
    answer:
      'Det styrs av hur snabbt objektet förändras och vad tvillingen ska användas till. En byggarbetsplats i aktiv produktion behöver tätare uppdatering än en färdig anläggning som främst dokumenteras för förvaltning. Vi kommer överens om en intervall som matchar behovet — tätare när det händer mycket, glesare i lugnare skeden.',
  },
  {
    question: 'Vilken data ingår i en digital tvilling?',
    answer:
      'Grunden är fotogrammetri som ger 3D-modell, punktmoln och ortofoto. Vid behov kompletteras den med laserskanning för mark under vegetation och med termisk data för att dokumentera värmerelaterade förhållanden. Vilka datakällor som ingår bestäms av vad tvillingen ska svara på.',
  },
  {
    question: 'Hur jämförs olika mättillfällen?',
    answer:
      'Eftersom varje mätning georefereras till samma koordinatsystem ligger datumen i samma läge och kan läggas över varandra. Jämförelsevyer visar vad som tillkommit, tagits bort eller ändrats mellan två tillfällen — användbart för produktionsuppföljning och för att belägga hur något såg ut vid en viss tidpunkt.',
  },
  {
    question: 'Vem kan komma åt tvillingen?',
    answer:
      'Materialet levereras så att det kan delas mellan de parter ni väljer — beställare, projektörer, entreprenörer och förvaltning. Att alla ser samma måttriktiga underlag minskar tolkningsutrymmet i diskussioner om läge, omfattning och skick.',
  },
  {
    question: 'Kan tvillingen användas för förvaltning av färdiga anläggningar?',
    answer:
      'Ja. För förvaltning fungerar den som en visuell och måttriktig dokumentation av anläggningens skick, som uppdateras vid återkommande tillfällen. Förändringar mellan besök blir synliga, vilket ger stöd åt underhållsplanering och åt beslut om åtgärder.',
  },
  {
    question: 'Hur kommer vi igång?',
    answer:
      'Berätta om objektet, hur ofta det förändras och vad ni vill kunna följa. Vi föreslår ett upplägg med mätintervall, datakällor och leveransinnehåll, samt leveranstid enligt offert för varje mättillfälle.',
  },
]

export default function DigitalTvillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Digital tvilling av byggnader och anläggningar',
              description:
                'En måttriktig digital kopia av byggnaden eller anläggningen som uppdateras vid återkommande drönarflygningar och visar förändring över tid.',
              url: '/tjanster/digital-tvilling',
              serviceType: 'Digital tvilling',
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
          { name: 'Digital tvilling', url: '/tjanster/digital-tvilling' },
        ]}
      />

      <Hero
        eyebrow="Kartläggning & 3D för företag"
        headline="Digital tvilling av byggnader och anläggningar"
        subheadline="En digital tvilling är en måttriktig kopia av ert objekt som byggs om vid återkommande flygningar och därmed speglar nuläget. Genom att jämföra mättillfällena ser ni exakt vad som förändrats — underlag för förvaltning, produktionsuppföljning och gemensam bild mellan parter. Rikstäckande i hela Sverige."
        ctaPrimary={{ label: 'Begär offert', href: '/kontakt' }}
        ctaSecondary={{ label: 'Så byggs tvillingen', href: '#process' }}
      />

      <TrustBar
        items={[
          'Återkommande uppdatering',
          'RTK/GNSS-positionering',
          'Jämförbar tidsserie',
          'Hela Sverige',
        ]}
      />

      <BenefitsGrid
        headline="Varför en digital tvilling?"
        subtitle="Ett underlag som följer objektet över tid i stället för att åldras direkt efter leverans."
        benefits={[
          {
            icon: 'building',
            title: 'Alltid aktuellt nuläge',
            description:
              'Modellen byggs om vid varje flygning, så att den speglar hur objektet ser ut nu och inte hur det såg ut en gång.',
          },
          {
            icon: 'chart',
            title: 'Förändring blir mätbar',
            description:
              'Jämförelse mellan två datum visar vad som tillkommit, tagits bort eller flyttats — i modell och i mått.',
          },
          {
            icon: 'clock',
            title: 'Produktionsuppföljning',
            description:
              'Byggskedet dokumenteras löpande så att framdrift kan följas och stämmas av mot plan.',
          },
          {
            icon: 'file',
            title: 'Dokumenterad historik',
            description:
              'Varje mättillfälle sparas som ett eget underlag och kan tas fram i efterhand när något behöver beläggas.',
          },
          {
            icon: 'camera',
            title: 'Flera datakällor i ett',
            description:
              'Fotogrammetri, LiDAR och termisk data kombineras efter behov i samma sammanhållna underlag.',
          },
          {
            icon: 'shield',
            title: 'Gemensam bild mellan parter',
            description:
              'Beställare, projektörer och entreprenörer ser samma måttriktiga underlag, vilket minskar tolkningsutrymmet.',
          },
        ]}
      />

      <ProcessSteps
        headline="Så byggs och underhålls tvillingen"
        steps={[
          {
            number: 1,
            title: 'Upplägg',
            description:
              'Vi går igenom vad tvillingen ska svara på, vilka datakällor som behövs och hur ofta objektet ska mätas in.',
          },
          {
            number: 2,
            title: 'Basmätning',
            description:
              'Objektet mäts in med RTK/GNSS och blir tidsseriens utgångsläge — grunden som alla senare mätningar jämförs mot.',
          },
          {
            number: 3,
            title: 'Modellbygge',
            description:
              'Data bearbetas till 3D-modell, punktmoln och ortofoto, georefererat i valt koordinatsystem.',
          },
          {
            number: 4,
            title: 'Återkommande uppdatering',
            description:
              'Vid varje nytt tillfälle flygs samma upplägg så att mättillfällena blir jämförbara med varandra.',
          },
          {
            number: 5,
            title: 'Jämförelse & delning',
            description:
              'Ni får jämförelsevyer mellan datum och en delbar visning där alla berörda kan se samma nuläge.',
          },
        ]}
      />

      <Deliverables
        headline="Det här ingår i leveransen"
        items={[
          {
            title: '3D-modell',
            description:
              'Måttriktig modell av byggnaden eller anläggningen som byggs om vid varje mättillfälle.',
          },
          {
            title: 'Punktmoln',
            description:
              'Georefererat punktmoln som grund för mätning, analys och vidare bearbetning.',
          },
          {
            title: 'Ortofoto',
            description:
              'Geometriskt korrigerad flygbild i skala över objektet och omgivande yta.',
          },
          {
            title: 'Tidsserie med jämförelsevyer',
            description:
              'Mättillfällena samlade i ordning med vyer som visar förändringen mellan valda datum.',
          },
          {
            title: 'Delbar visning',
            description:
              'Åtkomst som kan delas med projektörer, entreprenörer och förvaltning utan specialprogram.',
          },
          {
            title: 'Dokumentationspaket per mättillfälle',
            description:
              'Bilder, modeller och metoduppgifter samlade per datum så att varje tillfälle går att belägga.',
          },
        ]}
      />

      <FaqAccordion headline="Vanliga frågor om digitala tvillingar" items={faqItems} />

      <RelatedServices
        services={[
          {
            title: 'Fotogrammetri & 3D-modell',
            href: '/tjanster/fotogrammetri-3d-modell',
            description:
              'Modelltekniken som utgör tvillingens grund — punktmoln och texturerade 3D-modeller.',
          },
          {
            title: 'Termisk inspektion',
            href: '/tjanster/termisk-inspektion',
            description:
              'Termisk data som komplement när värmerelaterade förhållanden ska dokumenteras över tid.',
          },
          {
            title: 'BIM-underlag',
            href: '/tjanster/bim-underlag',
            description:
              'Inmätt verklighet i utbytesformat som era projektörer arbetar vidare med.',
          },
        ]}
      />

      <KnowledgeLinks
        slugs={[
          'vad-ar-en-digital-tvilling',
          'byggdokumentation-med-dronare',
          '3d-modeller-av-byggnader-anvandningsomraden',
        ]}
      />

      <CtaBand
        headline="Vill ni följa ert objekt över tid?"
        description="Berätta om anläggningen och hur ofta den förändras så föreslår vi ett upplägg för mätintervall och leverans."
        ctaLabel="Begär offert"
        ctaHref="/kontakt"
      />
    </>
  )
}

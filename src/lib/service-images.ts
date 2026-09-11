export const serviceImages = {
  'takinspektion': { src: '/images/tjanster/takinspektion.webp', title: "Takinspektion", alt: "Taköversikt med markerad avvikelse och detaljbild av takets tätskikt.", width: 1672, height: 941 },
  'fasadinspektion': { src: '/images/tjanster/fasadinspektion.webp', title: "Fasadinspektion", alt: "Fasadvy med markerad sprickbildning, detaljbild och linje för längdmätning.", width: 1672, height: 941 },
  'solcellsinspektion': { src: '/images/tjanster/solcellsinspektion.webp', title: "Solcellsinspektion", alt: "Solcellspaneler i RGB- och termisk vy med markerad temperaturavvikelse.", width: 1672, height: 941 },
  'termisk-inspektion': { src: '/images/tjanster/termisk-inspektion.webp', title: "Termisk inspektion", alt: "Fasad och fönster i RGB- och termisk vy med markerad temperaturavvikelse.", width: 1672, height: 941 },
  'fuktinspektion': { src: '/images/tjanster/fuktinspektion.webp', title: "Fuktinspektion", alt: "Tak i RGB- och termisk vy med ett avgränsat område för vidare kontroll.", width: 1672, height: 941 },
  'industriinspektion': { src: '/images/tjanster/industriinspektion.webp', title: "Industriinspektion", alt: "Industrianläggning med markerad observation och detaljbild av korrosion.", width: 1672, height: 941 },
  'vindkraftinspektion': { src: '/images/tjanster/vindkraftinspektion.webp', title: "Vindkraftinspektion", alt: "Vindkraftverk med markerad position och detaljbild av erosion på rotorblad.", width: 1672, height: 941 },
  'dronarinmatning': { src: '/images/tjanster/dronarinmatning.webp', title: "Drönarinmätning", alt: "Ortomosaik över ett arbetsområde med markerade punkter, linjer och avgränsningar.", width: 1672, height: 941 },
  'volymberakning': { src: '/images/tjanster/volymberakning.webp', title: "Volymberäkning", alt: "3D-vy av ett upplag med avgränsning, referensyta och tvärsektion.", width: 1672, height: 941 },
  'fotogrammetri-3d-modell': { src: '/images/tjanster/fotogrammetri-3d-modell.webp', title: "Fotogrammetri och 3D-modell", alt: "Byggnad i en texturerad 3D-vy och motsvarande vy med triangelnät.", width: 1672, height: 941 },
  '3d-kartlaggning': { src: '/images/tjanster/3d-kartlaggning.webp', title: "3D-kartläggning", alt: "Ortomosaik och 3D-vy över ett vägarbetsområde med markerad projektgräns.", width: 1672, height: 941 },
  'lidar-skanning': { src: '/images/tjanster/lidar-skanning.webp', title: "LiDAR-skanning", alt: "Punktmoln över skog och väg med färgklassad mark, vegetation och sektionsvy.", width: 1672, height: 941 },
  'bim-underlag': { src: '/images/tjanster/bim-underlag.webp', title: "BIM-underlag", alt: "Punktmoln av en byggnad tillsammans med en projekteringsmodell och kompletterande vyer.", width: 1672, height: 941 },
  'digital-tvilling': { src: '/images/tjanster/digital-tvilling.webp', title: "Digital tvilling", alt: "3D-modell av en industrianläggning med observationspunkter och kopplad detaljbild.", width: 1672, height: 941 },
  'markmodellering': { src: '/images/tjanster/markmodellering.webp', title: "Markmodellering", alt: "Markmodell med höjdkurvor, relativ höjdfärgning och terrängprofil.", width: 1672, height: 941 },
} as const

export type ServiceImageKey = keyof typeof serviceImages


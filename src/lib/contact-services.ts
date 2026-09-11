export const CONTACT_SERVICES = [
  {
    "sv": "takinspektion",
    "en": "roof-inspection",
    "labelSv": "Takinspektion",
    "labelEn": "Roof inspection"
  },
  {
    "sv": "fasadinspektion",
    "en": "facade-inspection",
    "labelSv": "Fasadinspektion",
    "labelEn": "Facade inspection"
  },
  {
    "sv": "solcellsinspektion",
    "en": "solar-panel-inspection",
    "labelSv": "Solcellsinspektion",
    "labelEn": "Solar panel inspection"
  },
  {
    "sv": "termisk-inspektion",
    "en": "thermal-inspection",
    "labelSv": "Termisk inspektion",
    "labelEn": "Thermal inspection"
  },
  {
    "sv": "fuktinspektion",
    "en": "moisture-inspection",
    "labelSv": "Fuktinspektion",
    "labelEn": "Moisture inspection"
  },
  {
    "sv": "industriinspektion",
    "en": "industrial-inspection",
    "labelSv": "Industriinspektion",
    "labelEn": "Industrial inspection"
  },
  {
    "sv": "vindkraftinspektion",
    "en": "wind-turbine-inspection",
    "labelSv": "Vindkraftinspektion",
    "labelEn": "Wind turbine inspection"
  },
  {
    "sv": "dronarinmatning",
    "en": "drone-surveying",
    "labelSv": "Drönarinmätning",
    "labelEn": "Drone surveying"
  },
  {
    "sv": "volymberakning",
    "en": "volume-calculation",
    "labelSv": "Volymberäkning",
    "labelEn": "Volume calculation"
  },
  {
    "sv": "fotogrammetri-3d-modell",
    "en": "photogrammetry-3d-model",
    "labelSv": "Fotogrammetri och 3D-modell",
    "labelEn": "Photogrammetry and 3D model"
  },
  {
    "sv": "3d-kartlaggning",
    "en": "3d-mapping",
    "labelSv": "3D-kartläggning",
    "labelEn": "3D mapping"
  },
  {
    "sv": "lidar-skanning",
    "en": "lidar-scanning",
    "labelSv": "LiDAR-skanning",
    "labelEn": "LiDAR scanning"
  },
  {
    "sv": "bim-underlag",
    "en": "bim-data",
    "labelSv": "BIM-underlag",
    "labelEn": "BIM survey data"
  },
  {
    "sv": "digital-tvilling",
    "en": "digital-twin",
    "labelSv": "Digital tvilling",
    "labelEn": "Digital twin"
  },
  {
    "sv": "markmodellering",
    "en": "terrain-modeling",
    "labelSv": "Markmodellering",
    "labelEn": "Terrain modeling"
  },
  {
    "sv": "forvaltningsavtal",
    "en": "maintenance-agreement",
    "labelSv": "Förvaltningsavtal",
    "labelEn": "Maintenance agreement"
  },
  {
    "sv": "annat",
    "en": "other",
    "labelSv": "Annat / Osäker",
    "labelEn": "Other / Not sure"
  }
] as const

export function validService(value: unknown): value is string {
  return typeof value === 'string' && (value === '' || CONTACT_SERVICES.some(item => item.sv === value || item.en === value))
}

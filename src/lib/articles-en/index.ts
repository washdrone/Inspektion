import type { Article, ArticleCategoryEn } from '@/lib/articles/types'
import { whatIsDroneInspection } from './what-is-drone-inspection'
import { droneRegulationsInSweden } from './drone-regulations-in-sweden'
import { howDroneThermographyWorks } from './how-drone-thermography-works'
import { findingMoistureDamage } from './finding-moisture-damage-with-thermal-inspection'
import { howADroneRoofInspectionWorks } from './how-a-drone-roof-inspection-works'
import { droneInspectionVsTraditional } from './drone-inspection-vs-traditional-inspection'
import { hotspotsInSolarPanels } from './hotspots-in-solar-panels'
import { whatIsPhotogrammetry } from './what-is-photogrammetry'
import { howDroneVolumeCalculationWorks } from './how-drone-volume-calculation-works'
import { droneInspectionForHousingAssociations } from './drone-inspection-for-housing-associations'
import { solarInstallationInspectionChecklist } from './solar-installation-inspection-checklist'
import { whatIsAnOrthophoto } from './what-is-an-orthophoto'
import { howAccurateIsDroneSurveying } from './how-accurate-is-drone-surveying'
import { droneInspectionInWinter } from './drone-inspection-in-winter'
import { documentingStormDamage } from './documenting-storm-damage-to-roofs'
import { constructionDocumentationWithDrones } from './construction-documentation-with-drones'
import { droneInspectionInAtexZones } from './drone-inspection-in-atex-zones'
import { howWindTurbineInspectionWorks } from './how-wind-turbine-inspection-works'
import { droneDocumentationForInsuranceClaims } from './drone-documentation-for-insurance-claims'
import { maintenancePlansWithDroneInspection } from './maintenance-plans-with-drone-inspection'
import { commonFacadeDefects } from './common-facade-defects-and-how-to-detect-them'
import { thermalBridgesAndHeatLoss } from './thermal-bridges-and-heat-loss'
import { roofSafetyDuringInspection } from './roof-safety-during-inspection-and-maintenance'
import { dronesInMunicipalPropertyManagement } from './drones-in-municipal-property-management'
import { threeDBuildingModelsUseCases } from './3d-building-models-use-cases'

export type { Article, ArticleCategoryEn } from '@/lib/articles/types'

/** All published English articles, in curated order (pillar articles first per category). */
export const ARTICLES_EN: Article[] = [
  whatIsDroneInspection,
  droneInspectionVsTraditional,
  droneRegulationsInSweden,
  howDroneThermographyWorks,
  findingMoistureDamage,
  howADroneRoofInspectionWorks,
  droneInspectionForHousingAssociations,
  hotspotsInSolarPanels,
  solarInstallationInspectionChecklist,
  whatIsPhotogrammetry,
  howDroneVolumeCalculationWorks,
  droneInspectionInWinter,
  droneInspectionInAtexZones,
  roofSafetyDuringInspection,
  documentingStormDamage,
  maintenancePlansWithDroneInspection,
  commonFacadeDefects,
  droneDocumentationForInsuranceClaims,
  thermalBridgesAndHeatLoss,
  dronesInMunicipalPropertyManagement,
  howWindTurbineInspectionWorks,
  whatIsAnOrthophoto,
  howAccurateIsDroneSurveying,
  constructionDocumentationWithDrones,
  threeDBuildingModelsUseCases,
]

export const CATEGORY_ORDER_EN: ArticleCategoryEn[] = [
  'Basics & methods',
  'Rules & safety',
  'Thermography & moisture',
  'Roofs & property',
  'Solar & energy',
  'Surveying & 3D',
]

export function getArticleEn(slug: string): Article | undefined {
  return ARTICLES_EN.find((article) => article.slug === slug)
}

export function articlesByCategoryEn(): Map<ArticleCategoryEn, Article[]> {
  const grouped = new Map<ArticleCategoryEn, Article[]>()
  for (const category of CATEGORY_ORDER_EN) {
    const articles = ARTICLES_EN.filter((a) => a.category === category)
    if (articles.length > 0) grouped.set(category, articles)
  }
  return grouped
}

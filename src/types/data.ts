interface AfbeeldingCrop {
  type: string
  height: number
  width: number
  ratio: string
  path: string
}

interface Afbeelding {
  bijschrift: string | null
  copyright: string
  afbeelding: string
  crops: AfbeeldingCrop[]
  type: string
}

interface Branded {
  status: boolean
  label: string | null
  partnerLogo: string | null
  partnerUrl: string | null
  clickTracker: string | null
  impressieTracker: string | null
}

interface SectieMetadata {
  entityType: string
  entityBundle: string
  template: string
  theme: string
}

interface Sectie {
  id: number
  title: string
  beschrijving: string | null
  woordenboek: string
  url: string
  analytics: string | null
  advertising: string | null
  items: string | null
  pager: string | null
  regions: any[]
  metadata: SectieMetadata
  type: string
}

interface Metadata {
  entityType: string
  entityBundle: string
  template: string
  theme: string
}

interface OverigeSecties extends Sectie {}

export interface ArtikelReferentie {
  id: number
  aangemaaktDatum: {
    timestamp: number
    formatted: string
  }
  bijgewerktDatum: {
    timestamp: number
    formatted: string
  }
  titel: string
  urlAlias: string
  afbeelding: Afbeelding
  branded: Branded
  sectie: Sectie
  overigeSecties: OverigeSecties[]
  labelValue: string
  labelType: string
  metadata: Metadata
  chapeau: string
  lead: string
  showVideoIcon: boolean
  isPremium: boolean
  type: string
}

import type { Discover, IPairsWellWith, IQuestions } from './types'

export interface IPersonasType {
  id: number
  title: string
  description: string
}

export interface IPersonaResponse {
  data: IPersonasType[]
}

export interface IPersonaTemplateResponse {
  data: IPersonaTemplate
}

export interface IPersonaTemplate {
  persona: IPersonaTemplateInfo
  questions: IQuestions[]
}
export interface IPersonaTemplateInfo {
  id: number
  title: string
  iconUrl: string
  description: string
  whenUse: string
  whoInvolve: string
  outcomes: string
  stage: Discover
  pairsWellWith: IPairsWellWith
}

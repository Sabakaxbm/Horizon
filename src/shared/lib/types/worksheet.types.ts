import type { Discover, IPairsWellWith, IQuestions } from './types'

export interface IWorksheetTypes {
  category: string
  worksheets: IWorksheets[]
}

export interface IWorksheetUserTypes {
  id: number
  title: string
  lastEditedAt: Date
}

export interface IWorksheetUserResponse {
  data: IWorksheetUserTypes[]
}

export interface IWorksheets {
  id: number
  title: string
  stage: Discover
}

export interface IWorksheetTypesResponse {
  data: IWorksheetTypes[]
}

export interface IWorksheetTemplateResponse {
  data: IWorksheetTemplate
}
export interface IWorksheetTemplate {
  worksheet: IWorksheetTemplateInfo
  questions: IQuestions[]
}
export interface IWorksheetTemplateInfo {
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

export interface IWorkSheetQuestions {
  id: number
  title: string
}

/* eslint-disable camelcase */
export interface HubspotProperties {
  firstname: string,
  email: string,
  phone: string,
  jobtitle?: string,
  departamento?: string,
  company?: string,
  numemployees?: string,
  utm_campaign?: string,
  utm_content?: string,
  utm_medium?: string,
  utm_source?: string,
  utm_term?: string,
  cnpj_conversao?: string,
}

export interface HubspotContext {
  hutk?: string,
  pageUri: string,
  pageName: string,
  ipAddress?: string
}

export interface HubspotFields {
  name: string,
  value: string
}

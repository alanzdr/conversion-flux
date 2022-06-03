import { HubspotContext } from 'services/Hubspot/Form/types';

type Employees = '1 - 10' | '11 - 20'

export interface FluxResponses {
  email: string,
  cnpj: string,
  useSystem: string,
  problemCurrent?: string,
  missingFunction?: string,
  missingFunctionDetail?: string,
  priorityLevel?: string,
  employees: Employees,
  decisionmaker: string,
  registrationForm: string,
  problemForNotHaving?: string
  routeKey: string
}


export interface FluxBody {
  responses: FluxResponses,
  context: HubspotContext,
  type: 'whats' | 'content',
  routeKey: 'conclusion-a' | 'conclusion-b',
}

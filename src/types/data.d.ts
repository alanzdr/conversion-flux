declare module 'data/data.json' {
  export type Library = { [key: string]: string };
  export type ExitType = 'whats' | 'content'
  export type ExitLibrary = Library & { type: ExitType, routeKey: string }
  export type QuestionType = 'radio'
    | 'radio-range'
    | 'textfield'
    | 'search'
  export type ResultType = 'finished' | 'continue'
  interface QuestionResult {
    default: ResultType,
    next: string,
    exceptions: {
      response: string | string[],
      type: ResultType,
      next: string
    }[]
  }
  export interface RangeResponse {
    image?: string,
    title: string,
    text: string
  }

  export interface Question {
    key: string,
    title: string,
    variant?: string,
    type: QuestionType,
    responses: string[] | RangeResponse[],
  }

  export interface Flow {
    key: string,
    order: number,
    question: string,
    result: QuestionResult
  }

  export interface ConclusionLayout {
    h3: string,
    h4: string
  }

  export interface Conclusion {
    key: 'conclusion-a' | 'conclusion-b',
    layout: ConclusionLayout
  }

  export interface ThemeConfigs {
    primary: string,
    secondary: string,
    background: string,
    textPrimary: string,
    textSecondary: string
  }

  export interface SEO {
    title: string,
    description: string,
    icon: string
  }

  export interface Credetials {
    name: string,
    version: number,
    seo: SEO,
    logo: {
      src: string
      alt: string
      width: number
      height: number
    }
  }

  export interface Content {
    theme: ThemeConfigs,
    credetials: Credetials,
    questions: Question[]
    conclusions: Conclusion[]
    flows: Flow[]
  }

  const content: Content;
  export default content;
}

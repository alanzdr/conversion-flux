import { Question } from 'data/data.json';

export type Validation = (next: () => void) => void

export interface LayoutProps {
  question: Question,
  value: string,
  onChange: (value: string) => void,
  onValidate: (validation: Validation) => void
  onConfirm: () => void
}

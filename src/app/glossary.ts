import { Term } from './term';

export class Glossary {
  id: number;
  name: string;
  language?: string;
  description?: string;
  terms: Term[];
}

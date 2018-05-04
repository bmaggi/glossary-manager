import { Glossary } from './glossary';
import { Term } from './term';

export const SCRUMGLOSSARY: Glossary[] = [
{ id: 11, name: 'Scrum Glossary', language: 'en', description:'Glossary for Scrum',
	terms: [
	  { id: 11, name: 'Burn-down Chart', description:'a chart which shows the amount of work which is thought to remain in a backlog. Time is shown on the horizontal axis and work remaining on the vertical axis. As time progresses and items are drawn from the backlog and completed, a plot line showing work remaining may be expected to fall. The amount of work may be assessed in any of several ways such as user story points or task hours. Work remaining in Sprint Backlogs and Product Backlogs may be communicated by means of a burn-down chart. See also: Burnup Chart'},
	  { id: 12, name: 'Burn-up Chart', description:'a chart which shows the amount of work which has been completed. Time is shown on the horizontal axis and work completed on the vertical axis. As time progresses and items are drawn from the backlog and completed, a plot line showing the work done may be expected to rise. The amount of work may be assessed in any of several ways such as user story points or task hours. The amount of work considered to be in-scope may also be plotted as a line; the burn-up can be expected to approach this line as work is completed.'},
	  { id: 13, name: 'Coherent/Coherence',description:'The quality of the relationship between certain Product Backlog items which may make them worthy of consideration as a whole. See also: Sprint Goal.'},
	  { id: 14, name: 'Daily Scrum', description:'daily time-boxed event of 15 minutes, or less, for the Development Team to re-plan the next day of development work during a Sprint. Updates are reflected in the Sprint Backlog.'},
	  { id: 15, name: 'Definition of Done', description:'a shared understanding of expectations that the Increment must live up to in order to be releasable into production. Managed by the Development Team.'},
	  { id: 16, name: 'Development Team', description:'the role within a Scrum Team accountable for managing, organizing and doing all development work required to create a releasable Increment of product every Sprint.'},
	  { id: 17, name: 'Emergence', description:'the process of the coming into existence or prominence of new facts or new knowledge of a fact, or knowledge of a fact becoming visible unexpectedly.'},
	  { id: 18, name: 'Empiricism', description:'process control type in which only the past is accepted as certain and in which decisions are based on observation, experience and experimentation. Empiricism has three pillars: transparency, inspection and adaptation.'},
	  { id: 19, name: 'Engineering standards', description:'a shared set of development and technology standards that a Development Team applies to create releasable Increments of software.'},
	  { id: 20, name: 'Forecast (of functionality)', description:'the selection of items from the Product Backlog a Development Team deems feasible for implementation in a Sprint.'},
	],
},{id: 12, name: 'ANSSI Glossary', language: 'fr', description:'Glossaire de l ANSSI',
	terms: [
	  { id: 11, name: 'Poste-à-poste', description:'Réseau d’échange et de partage de fichiers de particulier à particulier (exemples : e-mule, kasaa, limewire, eDonkey).'},
	  { id: 12, name: 'Port', description:'Code numérique utilisé dans les protocoles comme TCP ou UDP pour identifier à quel service appartient un paquet d’information du protocole IP. Par exemple, le service HTTP est associé au port 80. La notion de port peut être assimilée à une porte donnant accès au système d’exploitation.'},
	],	
}
 ];
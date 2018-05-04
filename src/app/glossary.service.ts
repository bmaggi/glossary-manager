import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { MessageService } from './message.service';
import { Glossary } from './glossary';
import { SCRUMGLOSSARY } from './scrum-glossary';


@Injectable()
export class GlossaryService {

  constructor(private messageService: MessageService) { }

  getGlossaries(): Observable<Glossary[]> {
	  this.messageService.add('GlossaryService: fetched glossaries');
		return of(SCRUMGLOSSARY);
	}
  
  
  getGlossary(id: number): Observable<Glossary> {
  // TODO: send the message _after_ fetching the glossary
  this.messageService.add(`GlossaryService: fetched Glossary id=${id}`);
  return of(SCRUMGLOSSARY.find(glossary => glossary.id === id));
}
}

import {TestBed, inject} from '@angular/core/testing';

import {MessageService} from './message.service';
import {GlossaryService} from './glossary.service';

describe('GlossaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        GlossaryService
      ]
    });
  });

  it('should be created', inject([GlossaryService], (service: GlossaryService) => {
    expect(service).toBeTruthy();
  }));
});

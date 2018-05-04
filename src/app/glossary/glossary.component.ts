import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GlossaryService }  from '../glossary.service';
import { Glossary } from '../glossary';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

  @Input() glossary: Glossary;
  
  
  constructor(
	  private route: ActivatedRoute,
	  private glossaryService: GlossaryService,
	  private location: Location  
  ) {}

ngOnInit(): void {
  this.getGlossary();
}

getGlossary(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.glossaryService.getGlossary(id)
    .subscribe(glossary => this.glossary = glossary);
}


goBack(): void {
  this.location.back();
}
}

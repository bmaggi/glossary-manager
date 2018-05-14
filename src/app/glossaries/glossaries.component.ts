import {Component, OnInit} from '@angular/core';
import {Glossary} from '../glossary';
import {GlossaryService} from '../glossary.service';


@Component({
  selector: 'app-glossaries',
  templateUrl: './glossaries.component.html',
  styleUrls: ['./glossaries.component.css']
})
export class GlossariesComponent implements OnInit {

  glossaries: Glossary[];

  constructor(private glossaryService: GlossaryService) {}

  ngOnInit() {
    this.getGlossaries();
  }

  getGlossaries(): void {
    this.glossaryService.getGlossaries().subscribe(glossaries => this.glossaries = glossaries);
  }

}

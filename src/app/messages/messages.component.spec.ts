import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from '.././app.component';
import {GlossaryComponent} from '.././glossary/glossary.component';
import {GlossariesComponent} from '.././glossaries/glossaries.component';
import {GlossaryService} from '.././glossary.service';
import {MessagesComponent} from '.././messages/messages.component';
import {MessageService} from '.././message.service';
import {AppRoutingModule} from '.././app-routing.module';
import {DashboardComponent} from '.././dashboard/dashboard.component';
import {TermComponent} from '.././term/term.component';

import {APP_BASE_HREF} from '@angular/common';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
 imports: [RouterTestingModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
      ],
      declarations: [
        AppComponent,
        GlossaryComponent,
        GlossariesComponent,
        MessagesComponent,
        DashboardComponent,
        TermComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '~/'},
        GlossaryService,
        MessageService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

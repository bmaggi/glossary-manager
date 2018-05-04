import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { GlossariesComponent } from './glossaries/glossaries.component';
import { GlossaryService } from './glossary.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermComponent } from './term/term.component';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryComponent,
    GlossariesComponent,
    MessagesComponent,
    DashboardComponent,
    TermComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [
  GlossaryService,
  MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

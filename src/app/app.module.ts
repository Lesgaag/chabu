import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { DetailPersonaComponent } from './detail-persona/detail-persona.component';
import { ArrowPersonaComponent } from './arrow-persona/arrow-persona.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionaireComponent,
    DetailPersonaComponent,
    ArrowPersonaComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

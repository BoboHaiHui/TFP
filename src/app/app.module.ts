import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturesComponent } from './features/features.component';
import { FormularComponent } from './formular/formular.component';
import { LocatiiComponent } from './locatii/locatii.component';
import { TeamComponent } from './team/team.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    QuizComponent,
    HeroSectionComponent,
    FeaturesComponent,
    FormularComponent,
    LocatiiComponent,
    TeamComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

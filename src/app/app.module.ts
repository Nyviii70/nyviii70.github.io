import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ErrorComponent } from './error/error.component';
import { PlayComponent } from './play/play.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    ExperienceComponent,
    FormationComponent,
    ErrorComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

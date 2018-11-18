import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyService } from './services/survey/survey.service';
import { SurveyResultsModule } from './modules/survey-results/survey-results.module';
import { SurveyDetailsModule } from './modules/survey-details/survey-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SurveyResultsModule,
    SurveyDetailsModule
  ],
  providers: [
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

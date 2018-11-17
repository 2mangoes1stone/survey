import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyResultsService } from './services/survey-results/survey-results/survey-results.service';
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
    SurveyResultsModule,
    SurveyDetailsModule
  ],
  providers: [
    SurveyResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

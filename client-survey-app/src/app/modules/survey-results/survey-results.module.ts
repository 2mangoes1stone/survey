import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyResultsComponent } from './survey-results.component';

@NgModule({
  declarations: [
    SurveyResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SurveyResultsComponent
  ]
})
export class SurveyResultsModule { }

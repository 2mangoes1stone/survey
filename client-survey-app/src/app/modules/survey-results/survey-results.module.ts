import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SurveyResultsComponent } from './survey-results.component';

@NgModule({
  declarations: [
    SurveyResultsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SurveyResultsComponent
  ]
})
export class SurveyResultsModule { }

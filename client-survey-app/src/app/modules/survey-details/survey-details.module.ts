import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './survey-details.component';

@NgModule({
  declarations: [
    SurveyDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SurveyDetailsComponent
  ]
})
export class SurveyDetailsModule { }

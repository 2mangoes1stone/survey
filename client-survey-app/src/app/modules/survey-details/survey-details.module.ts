import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyDetailsComponent } from './survey-details.component';
import { SurveyDetailsRoutingModule } from './survery-details-routing.module';

@NgModule({
  declarations: [
    SurveyDetailsComponent
  ],
  imports: [
    CommonModule,
    SurveyDetailsRoutingModule
  ],
  exports: [
    SurveyDetailsComponent
  ]
})
export class SurveyDetailsModule { }

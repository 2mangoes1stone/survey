import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyResultsComponent } from './modules/survey-results/survey-results.component';
import { SurveyDetailsComponent } from './modules/survey-details/survey-details.component';

const routes: Routes = [
  {
    path: 'survey-results',
    component: SurveyResultsComponent,
  },
  {
    path: 'survey-results/:survey-name',
    component: SurveyDetailsComponent
  },
  { path: '**', redirectTo: '/survey-results', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

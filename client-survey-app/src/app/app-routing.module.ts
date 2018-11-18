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
    path: 'survey-details/:survey-name',
    loadChildren: '../app/modules/survey-details/survey-details.module#SurveyDetailsModule'
  },
  { path: '**', redirectTo: '/survey-results', pathMatch: 'full' },
  { path: '', redirectTo: '/survey-results', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

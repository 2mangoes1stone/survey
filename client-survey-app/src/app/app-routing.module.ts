import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyResultsComponent } from './modules/survey-results/survey-results.component';

const routes: Routes = [
  {
    path: 'survey-results',
    component: SurveyResultsComponent,
  },
  { path: '**', redirectTo: '/survey-results', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

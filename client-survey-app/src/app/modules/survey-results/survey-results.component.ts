import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyResultsService } from 'src/app/services/survey-results/survey-results/survey-results.service';
import { SurveyResult } from 'src/app/services/survey-results/survey-results/survey-result.model';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {
  public surveyResults: SurveyResult[];
  public detailsRoute;

  private routeMapping = {
    'Simple Survey': 'simple-survey',
    'Acme Engagement Survey': 'acme-survey'
  }

  constructor(
    private surveyResultsService: SurveyResultsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.surveyResultsService.getSurveyResults()
      .subscribe(response => {
        this.surveyResults = response.survey_results
        response.survey_results.map(survey => {
          survey.routerLink = this.getRoute(survey);
        })
      });
  }

  public viewDetails(apiPath: string, queryParams: string): void {
    this.router.navigate([`/survey-results/${apiPath}`], {
      queryParams: {
        apiPath: queryParams
      }
    });
  }

  private getRoute(survey): string {
    return this.routeMapping[Object.keys(this.routeMapping).find(key => key.includes(survey.name))];
  }

}

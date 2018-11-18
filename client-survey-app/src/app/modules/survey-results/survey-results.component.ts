import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SurveyService } from 'src/app/services/survey/survey.service';
import { SurveyResult } from 'src/app/services/survey/survey.model';
import { easeInOutAnimation } from 'src/app/animations/ease-in-out.animation';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss'],
  animations: [ easeInOutAnimation ]
})
export class SurveyResultsComponent implements OnInit {
  public surveyResults: SurveyResult[];
  public detailsRoute;

  private routeMapping = {
    'Simple Survey': 'simple-survey',
    'Acme Engagement Survey': 'acme-survey'
  };

  constructor(
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.surveyService.getSurveyResults()
      .subscribe(response => {
        this.surveyResults = response.survey_results;
        response.survey_results.map(survey => {
          survey.router_link = this.getRoute(survey);
        });
      });
  }

  public viewDetails(apiPath: string, queryParams: string): void {
    this.router.navigate([`/survey-details/${apiPath}`], {
      queryParams: {
        apiPath: queryParams
      }
    });
  }

  private getRoute(survey): string {
    return this.routeMapping[Object.keys(this.routeMapping).find(key => key.includes(survey.name))];
  }

}

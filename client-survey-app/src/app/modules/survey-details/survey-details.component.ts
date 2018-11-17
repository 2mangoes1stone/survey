import { Component, OnInit } from '@angular/core';
import { SurveyResultsService } from 'src/app/services/survey-results/survey-results/survey-results.service';
import { ActivatedRoute } from '@angular/router';
import { SurveyResultDetail } from 'src/app/services/survey-results/survey-results/survey-result.model';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.scss']
})
export class SurveyDetailsComponent implements OnInit {
  public surveyDetails: SurveyResultDetail;

  constructor(
    private route: ActivatedRoute,
    private surveyResultsService: SurveyResultsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getSurveyDetails(params.apiPath);
    })
  }

  private getSurveyDetails(params: string): void {
    this.surveyResultsService.getSurveyResultDetails(params).subscribe(details => {
      this.surveyDetails = details.survey_result_detail;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SurveyResultsService } from 'src/app/services/survey-results/survey-results/survey-results.service';
import { SurveyResult } from 'src/app/services/survey-results/survey-results/survey-result.model';

@Component({
  selector: 'app-survey-results',
  templateUrl: './survey-results.component.html',
  styleUrls: ['./survey-results.component.scss']
})
export class SurveyResultsComponent implements OnInit {
  public surveyResults: SurveyResult[];

  constructor(
    private surveyResultsService: SurveyResultsService
  ) { }

  ngOnInit(): void {
    this.surveyResultsService.getSurveyResults()
      .subscribe(response => this.surveyResults = response.survey_results);
  }

}

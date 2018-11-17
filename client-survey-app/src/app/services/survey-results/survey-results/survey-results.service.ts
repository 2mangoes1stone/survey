import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SurveyResultResponse, SurveyResultDetailResponse } from './survey-result.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class SurveyResultsService {

  constructor(
    private http: HttpClient
  ) { }

  public getSurveyResults(): Observable<SurveyResultResponse> {
    return this.http.get<SurveyResultResponse>(`${environment.baseApiUrl}/survey_results`);
  }

  public getSurveyResultDetails(path: string): Observable<SurveyResultDetailResponse> {
    return this.http.get<SurveyResultDetailResponse>(`${environment.baseApiUrl}${path}`);
  }
}

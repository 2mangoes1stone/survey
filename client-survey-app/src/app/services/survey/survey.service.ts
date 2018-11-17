import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SurveyResultResponse, SurveyResultDetailResponse } from './survey.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class SurveyService {

  constructor(
    private http: HttpClient
  ) { }

  public getSurveyResults(): Observable<SurveyResultResponse> {
    return this.http.get<SurveyResultResponse>(`${environment.baseApiUrl}/survey_results`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getSurveyResultDetails(path: string): Observable<SurveyResultDetailResponse> {
    return this.http.get<SurveyResultDetailResponse>(`${environment.baseApiUrl}${path}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

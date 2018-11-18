import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SurveyService } from './survey.service';
import { environment } from 'src/environments/environment';

describe('SurveyService', () => {
  let service: SurveyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SurveyService
      ]
    });
    service = TestBed.get(SurveyService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSurveyResults', () => {
    const url = `${environment.baseApiUrl}/survey_results`;

    it('should make the get call with the correct url', () => {
      service.getSurveyResults().subscribe(() => {});
      const httpCall = httpMock.expectOne(url);
      expect(httpCall.request.url).toEqual(url);
    });
  });

  describe('getSurveyResultDetails', () => {
    const mockPath = '/mock-path';
    const url = `${environment.baseApiUrl}${mockPath}`;

    it('should make the get call with the correct url', () => {
      service.getSurveyResultDetails(mockPath).subscribe(() => {});
      const httpCall = httpMock.expectOne(url);
      expect(httpCall.request.url).toEqual(url);
    });
  });
});

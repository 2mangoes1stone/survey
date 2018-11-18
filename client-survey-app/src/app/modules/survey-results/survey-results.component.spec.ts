import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SurveyResultsComponent } from './survey-results.component';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { of } from 'rxjs';

describe('SurveyResultsComponent', () => {
  let component;
  let fixture: ComponentFixture<SurveyResultsComponent>;
  let surveyService;
  let router: Router;

  const mockSurveyResult = {
    name: 'mock-name',
    url: 'mock-url',
    participant_count: 'mock-participant-count',
    response_rate: 'mock-response-rate',
    submitted_response_count: 'mock-count'
  };

  const mockSurveyResults = {
    survey_results: [
      mockSurveyResult
    ]
  };

  beforeEach(async(() => {
    surveyService = {
      'getSurveyResults': jasmine.createSpy('getSurveyResults')
    };

    TestBed.configureTestingModule({
      declarations: [ SurveyResultsComponent ],
      providers: [
        { provide: SurveyService, useValue: surveyService }
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyResultsComponent);
    component = fixture.componentInstance;
    surveyService.getSurveyResults.and.returnValue(of(mockSurveyResults));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On init', () => {
    const mockRouterLink = 'mock-router-link';
    beforeEach(() => {
      spyOn(component, 'getRoute').and.returnValue(mockRouterLink);
      component.ngOnInit();
    });

    it('should set the components survey results value', () => {
      expect(component.surveyResults).toEqual(mockSurveyResults.survey_results);
    });

    it('should set the router link value to each survey', () => {
      expect(mockSurveyResult['router_link']).toEqual(mockRouterLink);
    });
  });

  describe('viewDetails', () => {
    const mockApiPath = 'mock-api-path';
    const mockQueryParams = 'mock-query-params';

    it('should navigate to the details route with the correct params', () => {
      spyOn(router, 'navigate');
      component.viewDetails(mockApiPath, mockQueryParams);

      expect(router.navigate).toHaveBeenCalledWith(
        [`/survey-details/${mockApiPath}`], {
          queryParams: {
            apiPath: mockQueryParams
          }
        }
      );
    });
  });

  describe('getRoute', () => {
    it('should return the correct router link string', () => {
      mockSurveyResult.name = 'Simple Survey';
      expect(component.getRoute(mockSurveyResult)).toEqual('simple-survey');
    });
  });
});

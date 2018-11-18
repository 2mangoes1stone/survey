import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SurveyDetailsComponent } from './survey-details.component';
import { SurveyService } from 'src/app/services/survey/survey.service';
import { of } from 'rxjs';

export class ActivatedRouteStub {
  snapshot = {
    queryParams: {
      apiPath: 'i-am-groot'
    }
  };
}

describe('SurveyDetailsComponent', () => {
  let component;
  let fixture: ComponentFixture<SurveyDetailsComponent>;
  let surveyService;
  let activatedRoute: ActivatedRoute;
  const activatedRouteStub = new ActivatedRouteStub();

  const mockDetails = {
    survey_result_detail: {
      themes: [ ]
    }
  };

  beforeEach(async(() => {
    surveyService = {
      'getSurveyResultDetails': jasmine.createSpy('getSurveyResultDetails')
    };

    TestBed.configureTestingModule({
      declarations: [ SurveyDetailsComponent ],
      providers: [
        { provide: SurveyService, useValue: surveyService },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
    activatedRoute = TestBed.get(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDetailsComponent);
    component = fixture.componentInstance;
    activatedRoute.queryParams = of(activatedRouteStub.snapshot.queryParams);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On init', () => {
    it('should get the survey details with the correct params', () => {
      spyOn(component, 'getSurveyDetails');
      fixture.detectChanges();

      expect(component.getSurveyDetails).toHaveBeenCalledWith(activatedRouteStub.snapshot.queryParams.apiPath);
    });
  });

  describe('getSurveyDetails', () => {

    beforeEach(() => {
      surveyService.getSurveyResultDetails.and.returnValue(of(mockDetails));
      spyOn(component, 'calculateAveRating');
      component.getSurveyDetails('mock-params');
    });

    it('should set the correct surveyDetails property', () => {
      expect(component.surveyDetails).toEqual(mockDetails.survey_result_detail);
    });

    it('should set the correct themes property', () => {
      expect(component.themes).toEqual(mockDetails.survey_result_detail.themes);
    });
  });

  describe('calculateAveRating', () => {

    it('should calculate the correct average rating', () => {
      component.themes = [{
        questions: [{
          survey_responses: [
            { response_content: '1' },
            { response_content: '' },
            { response_content: '3' },
          ]
        }]
      }];

      component.calculateAveRating();
      expect(component.themes[0].questions[0].average_rating).toEqual(2);
    });
  });
});

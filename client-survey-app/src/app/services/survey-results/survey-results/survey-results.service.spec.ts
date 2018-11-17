import { TestBed } from '@angular/core/testing';

import { SurveyResultsService } from './survey-results.service';

describe('SurveyResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyResultsService = TestBed.get(SurveyResultsService);
    expect(service).toBeTruthy();
  });
});

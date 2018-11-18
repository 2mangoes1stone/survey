import { SurveyResultsPage } from './survey-results.po';
import { e2eUtils } from '../../e2e-utils';

describe('Survey results page', () => {
  let page: SurveyResultsPage;

  beforeEach(() => {
    page = new SurveyResultsPage();
    page.navigateTo();
  });

  it('should load show the correct page heading', () => {
    e2eUtils.waitForElementDisplayed('.survey-results-container h1');
    expect(page.getHeading().getText()).toEqual('Survey Results');
  });

  it('show display the survey result card', () => {
    e2eUtils.waitForElementDisplayed('.survey-results-container .survey-card');
    expect(page.getCardElement().isDisplayed()).toBe(true);
  });

});

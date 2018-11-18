import { $ } from 'protractor';
import { AppPage } from '../../app.po';

export class SurveyResultsPage extends AppPage {

  getHeading() {
    return $('.survey-results-container h1');
  }

  getCardElement() {
    return $('.survey-results-container .survey-card');
  }
}

import { AppPage } from './app.po';
import { e2eUtils } from './e2e-utils';

describe('CultureAmp survey app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('navigate to the default route', () => {
    page.navigateTo();
    e2eUtils.waitForElementDisplayed('.survey-results-container');
    page.getUrl().then((path) => {
      expect(path).toContain('/survey-results');
    });
  });
});

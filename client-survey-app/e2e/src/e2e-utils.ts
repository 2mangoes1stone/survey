import { browser, $, ExpectedConditions } from 'protractor';

export const e2eUtils = {

  waitForElementDisplayed: elementName => {
    browser.wait(ExpectedConditions.visibilityOf($(elementName)), 5000);
  }

};

import { NgUniversalDemystifiedPage } from './app.po';

describe('ng-universal-demystified App', () => {
  let page: NgUniversalDemystifiedPage;

  beforeEach(() => {
    page = new NgUniversalDemystifiedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

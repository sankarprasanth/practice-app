import { PracticeAppPage } from './app.po';

describe('practice-app App', () => {
  let page: PracticeAppPage;

  beforeEach(() => {
    page = new PracticeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { FilmsAppPage } from './app.po';

describe('films-app App', () => {
  let page: FilmsAppPage;

  beforeEach(() => {
    page = new FilmsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

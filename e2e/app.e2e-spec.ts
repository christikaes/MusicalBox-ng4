import { MusicalBoxPage } from './app.po';

describe('musical-box App', () => {
  let page: MusicalBoxPage;

  beforeEach(() => {
    page = new MusicalBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

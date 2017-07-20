import { GeoPage } from './app.po';

describe('geo App', () => {
  let page: GeoPage;

  beforeEach(() => {
    page = new GeoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

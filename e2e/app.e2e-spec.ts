import { EscuelaTIPage } from './app.po';

describe('escuela-ti App', () => {
  let page: EscuelaTIPage;

  beforeEach(() => {
    page = new EscuelaTIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

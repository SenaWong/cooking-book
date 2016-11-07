import { Gold4uPage } from './app.po';

describe('gold4u App', function() {
  let page: Gold4uPage;

  beforeEach(() => {
    page = new Gold4uPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

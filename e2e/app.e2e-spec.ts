import { MyFolioPage } from './app.po';

describe('my-folio App', () => {
  let page: MyFolioPage;

  beforeEach(() => {
    page = new MyFolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

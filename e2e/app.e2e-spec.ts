import { AppPage } from './app.po';

describe('b2w-desafios-yantadeu App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('B2W - Desafios!');
  });
});

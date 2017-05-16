import { GunRangePage } from './app.po';

describe('gun-range App', () => {
  let page: GunRangePage;

  beforeEach(() => {
    page = new GunRangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

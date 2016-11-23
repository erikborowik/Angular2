import { FirstProjectAngularCliPage } from './app.po';

describe('first-project-angular-cli App', function() {
  let page: FirstProjectAngularCliPage;

  beforeEach(() => {
    page = new FirstProjectAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

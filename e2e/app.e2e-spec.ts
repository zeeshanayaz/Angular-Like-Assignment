import { LikeAngularAssignmentPage } from './app.po';

describe('like-angular-assignment App', () => {
  let page: LikeAngularAssignmentPage;

  beforeEach(() => {
    page = new LikeAngularAssignmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

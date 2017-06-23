import { PropertyManagementPage } from './app.po';

describe('property-management App', () => {
  let page: PropertyManagementPage;

  beforeEach(() => {
    page = new PropertyManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

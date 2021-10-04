

describe('AngularTestApplication', function() {
  it('should show a album by User Id', function() {
    browser.get('http://localhost:4200/users');


    expect(browser.getTitle()).toEqual('AngularTestApplication');
  });
});

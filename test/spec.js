browser.ignoreSynchronization = true;

describe('Test MSL server', function() {
	it('Load the page', function(done) {
		browser.driver.get('http://localhost:3000');
		var body = element(by.css('body'));
		expect(body.getText()).toBe('This is a MSL server.');
		browser.driver.sleep(3000);
		done();
	});
});

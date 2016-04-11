describe('Test MSL server', function() {
	
	it('Load the page', function(done) {
		browser.driver.get('http://localhost:3000');
		sleep(4000);
		done();
	});
});

define([
	'require',
	'intern!object',
	'intern/chai!assert'
], function (
	require,
	registerSuite,
	assert
) {
	registerSuite({
		name: 'ToDoTest',

		'check contents': function () {
			// Functional tests should return a command chain based on the remote object
			return this.remote
				// Initialize the find timeout (the default is driver-specific, and may be 0)
				.setFindTimeout(5000)
				// Use require.toUrl to get a relative URL to a resource
				.get(require.toUrl('http://crossbrowsertesting.github.io/todo-app.html'))
				.findByXpath('/html/body/div/div/div/ul/li[1]/input')
				.click()
				.findByXpath('/html/body/div/div/div/ul/li[2]/input')
				.click()
				.findByXpath('//*[@id="todotext"]')
				.click()
				.type('Write your first Selenium Test')
				.findByXpath('//*[@id="addbutton"]')
				.click()
				.findByXpath('/html/body/div/div/div/a')
				.click()
				.then(function() {
					console.log('Test Complete');
				});
		}
	});
});

# Getting Started with InternJS and CrossBrowserTesting

Not only can **[InternJS](https://theintern.github.io/)** be used to test software in general, its also a powerful tool that when used with the **[Selenium](http://www.seleniumhq.org/)** web-testing platform. Here we'll take you through the process of getting Intern setup with our site so you can start running tests against our pool of OS/Device/Browser configurations. Luckily, Intern makes this very simple. Let's get started.

First, clone or download this repository to your PC/Mac. If you don't have NPM or Node, you'll need that as well. You can **[find that here](https://nodejs.org/en/)**. Once you have the files in this repository and Node setup, navigate to the directory of the files. We'll need to go through a short installation process to ensure we have the necessary modules:

```
npm test
```

You'll also need to make some changes to the intern.js configuration file. The file is located in 'tests' directory. Once you have that open, you should see:

```
tunnelOptions: {
        // These can also be specified using the environment variables CBT_USERNAME and CBT_APIKEY
        username: 'you@yourdomain.com',
        apiKey: 'yourauthkey'
},
```

You'll want to ensure your username is set to the email address associated with your account, and that the apiKey is set to your apikey. As the comments mention, you can alternatively use environment variables to set the username and apikey. This will also be the file in which you'll set the OS/Browser/Device configuration. For now, backup two directories, and run your test:

```
npm test
```

If you have our app open, you should see your test start. Because of our integration with digdug, the test will also start a tunnel for you. The existing test in the 'functional' directory tests a basic AngularJS ToDoApp. All tests in this directory will run. Unlike other test frameworks that require you to create a request to set the score, Intern does this automatically once the test finishes. 

Want to run tests in parallel? That's easy too! Open up the intern.js configuration file. Adding OS/Device configurations is as easy as adding capabilities objects to the 'environments' array. For instance, this environments array would run a test to Chrome, Edge, and Firefox on Windows 10:

```
environments: [
		{
			'name': 'Intern Example',
			'build': '1.0',
			'browserName': 'chrome',
			'os_api_name': 'Win10',
			'browser_api_name': 'chrome-latest',
			'screen_resolution': '1366x768',
			'record_video': 'true',
			'record_network': 'true'
		},
		{
			'name': 'Intern Example',
			'build': '1.0',
			'browserName': 'firefox',
			'os_api_name': 'Win10',
			'browser_api_name': 'ff-latest',
			'screen_resolution': '1366x768',
			'record_video': 'true',
			'record_network': 'true'
		},
		{
			'name': 'Intern Example',
			'build': '1.0',
			'browserName': 'internet explorer',
			'os_api_name': 'Win10',
			'browser_api_name': 'Edge15',
			'screen_resolution': '1366x768',
			'record_video': 'true',
			'record_network': 'true'
		}
	]
```

The Intern testrunner also nicely keeps track of which tests passed and failed with a small in-terminal report. You should see something like:

```
Listening on 0.0.0.0:9000
Tunnel started
‣ Created session internet explorer on any platform (45c12f4a-99d1-4e4a-abed-f338cc1940ed)
‣ Created session chrome on any platform (022466e8-b8c8-4770-b144-8b1022c129b6)
Test Complete
✓ chrome on any platform - ToDoTest - check contents (5.065s)
No unit test coverage for chrome on any platform
chrome on any platform: 0/1 tests failed

‣ Created session firefox on any platform (183fcd66-e5a9-4bd5-aff3-bbcf923310d5)
Test Complete
✓ internet explorer on any platform - ToDoTest - check contents (12.917s)
No unit test coverage for internet explorer on any platform
internet explorer on any platform: 0/1 tests failed

Test Complete
✓ firefox on any platform - ToDoTest - check contents (6.446s)
No unit test coverage for firefox on any platform
firefox on any platform: 0/1 tests failed


TOTAL: tested 3 platforms, 0/3 tests failed
```

We find Intern to be incredibly useful for writing both unit and functional tests, and we think you will too. If you need any help at all, feel free to get in touch.

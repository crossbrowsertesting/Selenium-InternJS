define({
	environments: [
		{
			'name': 'Intern Example',
			'build': '1.0',
			'browserName': 'chrome', 		// requests latest verison of chrome by default
			'platform': 'Windows 10',		// to specify a version, add 'version': 'desired version'
			'screen_resolution': '1366x768',
			'record_video': 'true',
			'record_network': 'false'
		}
	],

	// The default proxyUrl, 'http://localhost:9000', doesn't work for CBT, so it needs to be
	// manually specified.
	proxyUrl: 'http://local:9000',

	tunnel: 'CrossBrowserTestingTunnel',

	tunnelOptions: {
		// These can also be specified using the environment variables CBT_USERNAME and CBT_APIKEY
		username: 'you@yourdomain.com',
		apiKey: 'yourauthkey'
	},

	loaderOptions: {
		packages: [ { name: 'app', location: '.' } ]
	},

	// suites: [ 'app/tests/unit/*' ],

	functionalSuites: [ 'app/tests/functional/*' ],

	excludeInstrumentation: true
});

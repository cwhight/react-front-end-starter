const jestConfig = require('./jest.config.js');

module.exports = {
	...jestConfig,
	collectCoverage: false,
	testPathIgnorePatterns: [],
	testRegex: '(.*e2e(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	verbose: true,
	reporters: [
		'default',
		[
			'jest-html-reporter',
			{
				outputPath: './reports/tests/e2e/index.html',
			},
		],
		[
			'jest-junit',
			{
				outputDirectory: './reports/tests/e2e',
			},
		],
	],
};

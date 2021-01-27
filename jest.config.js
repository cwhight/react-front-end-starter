// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	collectCoverage: true,
	coverageDirectory: './reports/coverage/',
	collectCoverageFrom: [
		'./src/**/*.{ts,tsx}',
	],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
	testPathIgnorePatterns: ['\\.e2e'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': './tests/__mocks__/fileMock.js',
		'\\.(css|scss|less)$': 'identity-obj-proxy',
	},
	reporters: [
		'default',
		[
			'jest-html-reporter',
			{
				outputPath: './reports/tests/unit/index.html',
			},
		],
		[
			'jest-junit',
			{
				outputDirectory: './reports/tests/unit',
			},
		],
	],
};

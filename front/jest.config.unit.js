module.exports = {
	roots: ['<rootDir>/src'],
	moduleDirectories: ['node_modules', 'src'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy'
	},
	coverageReporters: ['text', 'cobertura']
};

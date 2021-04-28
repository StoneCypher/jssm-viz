
module.exports = {

  testEnvironment            : 'node',

  moduleFileExtensions       : ['js', 'ts'],
  coveragePathIgnorePatterns : ["/node_modules/", "/src/ts/tests/"],
  testMatch                  : ['**/*.spec.ts'],

  transform                  : { '^.+\\.ts$': 'ts-jest' },

  verbose                    : false,
  collectCoverage            : true,
  coverageDirectory          : "coverage/spec/",
/*
  coverageThreshold : {
    global : {
      branches   : 10,
      functions  : 10,
      lines      : 10,
      statements : 10,
    },
  },
*/
  collectCoverageFrom: ["src/ts/**/{!(jssm-dot),}.{js,ts}"]

};

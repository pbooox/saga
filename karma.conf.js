// karma.conf.js
const path = require("path");

module.exports = (config) => {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("karma-junit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],

    reporters: ["progress", "junit", "coverage"],

    junitReporter: {
      outputDir: "coverage",
      outputFile: "junit.xml", 
      useBrowserName: false,
    },

    coverageReporter: {
      dir: path.join(__dirname, "coverage"),
      reporters: [
        { type: "lcovonly", file: "lcov.info" },
        { type: "cobertura", file: "cobertura-coverage.xml" },
        { type: "text-summary" },
      ],
      check: {
        global: {
          statements: 80,
          branches: 70,
          functions: 80,
          lines: 80,
        },
      },
    },

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-dev-shm-usage"],
      },
    },
    browsers: ["ChromeHeadlessNoSandbox"],
    singleRun: true,
  });
};

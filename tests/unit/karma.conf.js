// const webpackConfig = require('../../node_modules/@vue/cli-service/webpack.config.js');
const webpackConfig = require('./webpack.test.conf.js');

const fileArgs = process.argv[process.argv.length - 1]
const file = fileArgs.includes('file:') ? fileArgs.split(':')[1] : '*';

module.exports = function (config) {
  config.set({
    basePath: '../..',
    browsers: ['HeapProfilerChrome'],
    customLaunchers: {
      HeapProfilerChrome: {
        base: 'ChromeHeadless',
        flags: ['--disable-translate', '--disable-extensions', '--remote-debugging-port=9223', '--enable-precise-memory-info', '--js-flags="--expose-gc"'],
      },
    },
    client: {
      captureConsole: true,
      mocha: {
        bail: true,
      },
    },
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['progress', 'time-stats'],
    files: [
      'tests/unit/test-main.js',
      { pattern: `tests/unit/**/${file}.spec.js` }],
    preprocessors: {
      'tests/unit/**/*.spec.js': ['webpack', 'sourcemap'],
    },
    // ** ADD THIS IN ** (vue-cli's webpack template doesn't add it by default)
    plugins: [
      // Launchers
      'karma-chrome-launcher',

      // Test Libraries
      'karma-mocha',
      'karma-sinon-chai',

      // Preprocessors
      'karma-webpack',
      'karma-sourcemap-loader',

      // Reporters
      'karma-spec-reporter',
      'karma-coverage',
      'karma-nyan-reporter',
      'karma-mocha-reporter',
      'karma-time-stats-reporter',
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    timeStatsReporter: {
      reportTimeStats: true, // Print Time Stats (histogram)
      binSize: 1, // Bin size for histogram (in milliseconds)
      slowThreshold: 10, // The threshold for what is considered a slow test (in milliseconds).
      reportSlowestTests: true, // Print top slowest tests
      showSlowTestRankNumber: false, // Displays rank number next to slow tests, e.g. `1) Slow Test`
      longestTestsCount: 5, // Number of top slowest tests to list
      reportOnlyBeyondThreshold: false, // Only report tests that are slower than threshold
    },
  });
};

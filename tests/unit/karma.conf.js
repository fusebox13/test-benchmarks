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
    reporters: ['progress'],
    files: [
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
  });
};

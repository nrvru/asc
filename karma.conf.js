const webpackConfig = require('./webpack.config')({test: true});

const testGlog = 'test/**/*';
const srcGlob = 'src/**/*';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [testGlog],
    preprocessors: {
      [testGlog]: ['webpack', 'sourcemap'],
      [srcGlob]: ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress', 'coverage'],
    coverageReporter: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
};

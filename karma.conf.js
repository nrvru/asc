const webpackConfig = require('./webpack.config')({ test: true });

const testGlob = 'test/**/*';
const srcGlob = 'src/**/*';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [testGlob],
    preprocessors: {
      [testGlob]: ['webpack', 'sourcemap'],
      [srcGlob]: ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    reporters: ['progress', 'coverage'],
    coverageReporter: {},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
};

module.exports = function(config) {

  var options = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Continuous Integration mode: if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'target/**/*', included: false, watched: false},
      'node_modules/es6-module-loader/dist/es6-module-loader.src.js',
      'node_modules/systemjs/dist/system.src.js',
      'karma-systemjs.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'target/**/*.js': ['sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: 'INFO'

  };


  // additional options for coverage
  if (process.argv.indexOf('--coverage') !== -1) {
    options.preprocessors['target/**/!(*.spec).js'] = ['coverage'];
    options.reporters.push('coverage');
    options.coverageReporter = {
      type : 'lcov',
      dir  : 'tmp/coverage'
    }
  }


  config.set(options);

};

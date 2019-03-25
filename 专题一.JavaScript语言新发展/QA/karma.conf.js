// Karma configuration
// Generated on Mon Mar 25 2019 10:52:32 GMT+0800 (GMT+08:00)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'], //断言库


        // list of files / patterns to load in the browser
        //文件路径
        files: [
            "./tests/unit/*.js", //被测试文件
            "./tests/unut/*.spec.js" //测试文件
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //对哪些文件进行覆盖率的检查
            './tests/unit/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress'],
        //测试报告
        reporters: ['progress', 'coverage'],

        // 报表
        coverageReporter: {
            type: 'html',
            dir: './docs/coverage/'
        },
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['PhantomJS'], 
        //测试的浏览器。无头浏览器
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true, //使用无头浏览器需要修改这个

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
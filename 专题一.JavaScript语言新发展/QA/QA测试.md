##单元测试

断言库主要使用：jasmine  (不需要单独下载)

测试集成环境：karma

$ npm install -g karma-cli //全局安装karma-cli集成环境

karma init 生成配置文件

```js
配置文件需要修稿的一些配制
files: [
            "./tests/unit/*.js",//被测试文件
            "./tests/unut/*.spec.js"//测试文件
        ],
 preprocessors: {
     //对哪些文件进行覆盖率的检查
     './tests/unit/**/*.js': ['coverage']
   },
     //测试报告
 reporters: ['progress', 'coverage'],
       // 报表
       coverageReporter: {
         type: 'html',
           dir: './docs/coverage/'
       },
      //测试的浏览器。无头浏览器
 browsers: ['PhantomJS'],
```

npm install karma-jasmine jasmine-core --save-dev  //下载依赖文件

npm install karma-phantomjs-launcher --save-dev //无头浏览器的安装

npm install karma karma-coverage --save-dev //检测代码的覆盖率

##e2e(功能的测试)

```shell
npm install selenium-webdriver --save-dev
因为需要模拟点击等操作，所以需要下载相应浏览器的驱动，参考链接
https://www.npmjs.com/package/selenium-webdriver
```

```js
const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd')).sendKeys('京程一灯', Key.RETURN);
        await driver.wait(until.titleIs('京程一灯 百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();
```

## Ui

backstop init  生成backstop.json配置文件

backstop test    生成报表

## service

npm i mocha --save-dev

npm i mochawesome --save-dev  //生成报表的包
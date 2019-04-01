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
        //判断标题是不是京程一灯 _ 百度搜索
        await driver.wait(until.titleIs('京程一灯 _ 百度搜索'), 1000);
    } finally {
        await driver.quit();
        //关闭浏览器
    }
})();
// async function getTitle(url) {
//     let response = await fetch(url);
//     let html = await response.text();
//     return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }
// getTitle('https://tc39.github.io/ecma262/').then(console.log)
// // "ECMAScript 2017 Language Specification"

function getSomething() {
    return "something";
}

async function testAsync() {
    return Promise.resolve("hello async");
}
/* 
await后面可以接任何值，可以是一个promise，也可以是一个普通的值
如果awite后面的是普通的值，那awite后面的就是他等待的东西
如果awite后面是一个promise，awite会堵塞后面的代码，等着promise对象resolve，得到resolve的值，作为awite的结果

*/
async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
}
// console.log(test());
//Promise { <pending> }

test().then(function() {
    console.log(123);
});
console.log("-------");

function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

takeLongTime().then(v => {
    console.log("got", v);
});
// 使用async改写

function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTime();
    console.log(v);
}

test();



/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
//使用promise执行
function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();

// c:\var\test>node --harmony_async_await .
// step1 with 300
// step2 with 500
// step3 with 700
// result is 900
// doIt: 1507.251ms
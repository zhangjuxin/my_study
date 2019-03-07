var fetch = require('node-fetch');

function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result, 'result');
    console.log(result.bio);
    //How people build software.

}
var g = gen();
var result = g.next();

result.value.then(function(data) {
    return data.json();
}).then(function(data) {
    g.next(data);
});
/* 
上面代码中，首先执行 Generator 函数，获取遍历器对象，
然后使用next方法（第二行），执行异步任务的第一阶段。
由于Fetch模块返回的是一个 Promise 对象，因此要用then方法调用下一个next方法。

可以看到，虽然 Generator 函数将异步操作表示得很简洁，
但是流程管理却不方便（即何时执行第一阶段、何时执行第二阶段）
*/

var a = 10;

function test() {
    var a = 2;
    var init = new Function("console.warn(a)");
    init();
}
test();
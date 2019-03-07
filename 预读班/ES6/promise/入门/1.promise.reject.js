Promise.reject("Testing static reject").then(function(reason) {
    console.log(reason, '123');
    // 未被调用
}, function(reason) {
    console.log(reason); // "Testing static reject"
});

Promise.reject(new Error("fail")).then(function(result) {
    // 未被调用
}, function(error) {
    console.log(error); // stacktrace
});
/* 
静态函数Promise.reject返回一个被拒绝的Promise对象。通过使用Error的实例获取错误原因reason对调试和选择性错误捕捉很有帮助
*/
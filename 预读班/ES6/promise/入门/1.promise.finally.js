var p = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10);
    }, 10)
}).then(function(data) {
    console.log(data);

}).finally(() => {
    //finally 不接受任何参数，无论最终结果是什么都会执行的函数
    console.log(data);
})
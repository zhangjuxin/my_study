// (async function() {
//     function promisefn(url) {
//         return new Promise((resolve, reject) => {
//             $.ajax({
//                 url: url,
//                 success: function(res) {
//                     resolve(res);
//                 },
//                 error: function(err) {
//                     reject(err);
//                 }
//             });
//         })
//     }
// })();
// console.log(promisefn('./1.json'));
// const a1 = await promisefn('./1.json');
// console.log(a1);
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
/* 
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，
再接着执行函数体内后面的语句。
*/
asyncPrint('hello world', 5000);
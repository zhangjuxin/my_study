var promise1 = Promise.resolve(123);
//静态方法 Promise.resolve返回一个解析过的Promise对象.

console.log(promise1);

promise1.then(function(value) {
    console.log(value);
    //123
});
/* 
Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
但如果这个值是个thenable（即带有then方法），返回的promise会“跟随”这个thenable的对象，
采用它的最终状态（指resolved/rejected/pending/settled）；如果传入的value本身就是promise对象，
则该对象作为Promise.resolve方法的返回值返回；否则以该值为成功状态返回promise对象。
*/

Promise.resolve("Success").then(function(value) {
    console.log(value); // "Success"
}, function(value) {
    // 不会被调用
});

var p = Promise.resolve([1, 2, 3]);
p.then(function(v) {
    console.log(v[0]); // 1
});
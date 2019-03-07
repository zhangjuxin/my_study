/* 
Promise.resolve/promise.reject是手动创建一个已经resolve的函数的快捷方法
*/

const wait = ms => new Promise(resolve => {
    console.log(123);
    setTimeout(resolve, ms)
});

wait(1).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

/* 
传递到**then函数**中的被置入了一个微任务队列，等到所有的事件队列代码执行完后，才会去执行微任务

*/
// Promise是一个构造函数
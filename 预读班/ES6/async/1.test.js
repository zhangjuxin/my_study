async function timeout() {
    return 'hello world'
}
console.log(timeout()); //async 函数返回的是一个promise 对象
console.log('虽然在后面，但是我先执行');

async function timeout(flag) {
    if (flag) {
        return 'hello world'
    } else {
        throw 'my god, failure'
    }
}
//代码出错的时候返回reject对象
console.log(timeout(true)); // 调用Promise.resolve() 返回promise 对象。
console.log(timeout(false)); // 调用Promise.reject() 返回promise 对象。
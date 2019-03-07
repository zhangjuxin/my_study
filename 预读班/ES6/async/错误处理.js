// await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。
async function myFunction() {
    try {
        await somethingThatReturnsAPromise();
    } catch (err) {
        console.log(err);
    }
}

// 另一种写法
async function myFunction() {
    await somethingThatReturnsAPromise().catch(function(err) {
        console.log(err);
    });
}
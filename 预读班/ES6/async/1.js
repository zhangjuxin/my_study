/* 
async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
*/
// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     //await 后面接promise
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('hello world', 2000);
//可以作为await命令的参数
async function timeout(ms) {
    //await 后面接异步任务，promise
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}

asyncPrint('hello world', 2000);
function* gen(x) {
    console.log(1);

    var y = yield x + 2;
    return y;
}

var g = gen(1);
console.log(g.next());
// { value: 3, done: false }
console.log(g.next());


// next()内还可以写参数作为上次yield返回的结果
function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next(2) // { value: 2, done: true }

//   错误处理
function* gen(x) {
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e);
    }
    return y;
}

var g = gen(1);
g.next();
g.throw('出错了');
// 出错了
/* 
上面代码的最后一行，Generator 函数体外，使用指针对象的throw方法抛出的错误，
可以被函数体内的try...catch代码块捕获。这意味着，出错的代码与处理错误的代码，
实现了时间和空间上的分离，这对于异步编程无疑是很重要的。
*/
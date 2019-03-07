/*
 * @Author: zhangJuxin
 * @LastEditors: zhangJuxin
 * @Description: Generator 每次调用异步方法，都要手动执行一次 iterator.next()，通过递归 iterator.next() 我们就不用再手动执行 next() 方法了。
 * @Date: 2019-03-04 15:12:34
 * @LastEditTime: 2019-03-04 15:20:22
 */
function fetch(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello " + word);
        }, 2000)
    })
}

function* gen() {
    try {
        const api1 = yield fetch("China!");
        console.log(1);

        const api2 = yield fetch("World!");
        console.log(2);

        const api3 = yield fetch("Earth!");
        console.log(3);
    } catch (error) {
        console.log(error);
    }

}



function co(gen) {
    const g = gen();

    function next(data) {
        const result = g.next(data);
        if (result.done) return;
        console.log(data, 'data');

        result.value.then(data => {
            console.log(data);
            next(data);
        })
    }

    next();
}

co(gen);
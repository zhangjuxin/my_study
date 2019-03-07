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

const iterator = gen(); // 返回迭代器对象

const result1 = iterator.next().value;
console.log(iterator.next(), 'result1');


result1.then(res1 => {
        console.log(res1)
        return iterator.next().value;
    })
    .then(res2 => {
        console.log(res2)
        return iterator.next().value;
    })
    .then(res3 => {
        console.log(res3)
        return iterator.next().value;
    })
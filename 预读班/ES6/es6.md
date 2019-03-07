# es6知识点

## promise

### promise基本写法

```js
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]


//Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
//then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。
```

### promise.all()

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('成功了')
    }, 3000)
})

let p2 = new Promise((resolve, reject) => {
    resolve('success')
})

let p3 = Promise.reject('失败')


/* 
多个promise，等所有promise都成功了在输出结果，如果都成功了输出结果数组，有一个失败了，输出失败的那个
*/
Promise.all([p1, p2]).then((result) => {
    console.log(result) //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

Promise.all([p1, p3, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error) // 失败了，打出 '失败'
})
//如果promise.all里面不是promise，那么直接输出
Promise.all([1, 2, 3]).then(values => {
    console.log(values); // [1, 2, 3]
})
```

###  Promise.finally

```js
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
```

### promise的错误统一处理封装

```js
function onError() {
    console.log('网络异常');
}

function getData(url) {
    const promise = fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('error');
        }
    });
    promise.oldThen = promise.then;
    /* 
    promise.then(function(value) {
     // success
    }, function(error) {
    // failure
    });
    then方法有两个参数，第一个是成功的回调函数，第二个是失败的回调函数，
    这里重写了then方法，增加了一些功能，如果then的第二个参数没写，失败的时候就默认执行onError方法
    */
    promise.then = (onFulfilled, onRejected) => {
        return promise.oldThen(onFulfilled, onRejected || onError);
    };

    return promise;
}
getData('./12.json').then(data => {
    console.log(data);
});
```

## async 

### 经典的🌰

```js
function get1() {
    return fetch('./1.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            return myJson;
        });
}

function get2(s) {
    return fetch(`./${s.name}.json`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            return myJson;
        });
}
async function test() {
    let res1 = await get1();//{name:2}
    let res2 = await get2(res1);
    console.log(res1, res2);
}
test();
//使用get1的结果去请求get2的数据，完美

// promise改写
function get3() {
    return fetch('./1.json')
        .then(function(response) {
            return response.json();
        })

}

function get4(s) {
    return fetch(`./${s.name}.json`)
        .then(function(response) {
            return response.json();
        })

}

function pro() {
    get3().then((data) => get4(data).then((data) => {
        console.log(data);
    }))
}
pro();
```

下面是上面代码的async化,很好

```js
async function get1() {
    const response = await fetch('./1.json');
    const myJson = await response.json();
    return myJson;
}

async function get2(s) {
    const response = await fetch(`./${s.name}.json`);
    const myJson = await response.json();
    return myJson;
}
async function test() {
    let res1 = await get1();
    let res2 = await get2(res1);
    console.log(res1, res2);
}
test();
// promise改写
async function get3() {
    const response = await fetch('./1.json');
    return response.json();

}

async function get4(s) {
    const response = await fetch(`./${s.name}.json`);
    return response.json();

}

function pro() {
    get3().then((data) => get4(data).then((data) => {
        console.log(data);
    }))
}
pro();
```


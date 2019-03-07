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

new Promise((resolve, reject) => {
    reject(1);
}).then(function(res) {
    console.log(res, '1');
}, function(err) {
    console.log(err, 'err'); //1 err
}).catch((err) => {
    console.log(err, 2);
})
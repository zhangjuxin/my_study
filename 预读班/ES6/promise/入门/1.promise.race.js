/* 
race的实现
*/
Promise.myrace = function(entries) {
    /*jshint validthis:true */
    var Constructor = this; // this 是调用 race 的 Promise 构造器函数。
    if (!Array.isArray(entries)) {
        return new Constructor(function(_, reject) {
            return reject(new TypeError('You must pass an array to race.'));
        });
    } else {
        return new Constructor(function(resolve, reject) {
            var length = entries.length;
            for (var i = 0; i < length; i++) {
                console.dir(Constructor, 'Constructor');

                Constructor.resolve(entries[i]).then(resolve, reject);
            }
        });
    }
}
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('failed')
        // reject('failed')
    }, 1500)
})

/* 
p1,p2哪个快就先返回哪个，剩下的不管了
*/
Promise.myrace([p1, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error) // 打开的是 'failed'
})
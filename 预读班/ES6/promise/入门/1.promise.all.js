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
Promise.all([1, 2, 3]).then(values => {
    console.log(values); // [1, 2, 3]
})
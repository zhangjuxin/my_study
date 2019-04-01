// function yideng() {
//     return {
//         a: 1
//     }
// };
// var result = yideng();
// console.log(result.a);
const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});
const ajax1 = () => timeout(2000).then(() => {
    console.log("1");
    return 1;
})
const ajax2 = () => timeout(1000).then(() => {
    console.log("2");
    return 2;
})
const ajax3 = () => timeout(2000).then(() => {
    console.log("3");
    return 3;
})
const mergePromise = (ajaxArray) => {
    // 1,2,3, done [1,2,3]  此处写代码，请写出es6,es3 2种解法
    return (async function() {
        const res1 = await ajaxArray[0]();
        const res2 = await ajaxArray[1]();
        const res3 = await ajaxArray[2]();
        return [res1, res2, res3];
    })();
}
mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); //data 为[1,2,3]
})
//执行结束，1 2 3 done [1,2,3]
// function shuffle(arr) {
//     let new_arr = arr.map(i => ({
//         v: i,
//         r: Math.random()
//     }));
//     new_arr.sort((a, b) => a.r - b.r);
//     arr.splice(0, arr.length, ...new_arr.map(i => i.v));
// }
// let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let n = 10000;
// //fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// let count = (new Array(a.length)).fill(0); //count全部是0
// for (let i = 0; i < n; i++) {
//     shuffle(a);
//     count[a.indexOf('a')]++;
// }
// console.log(count);
// //
let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
/* 
Math.random()  返回0-1之间的数
*/
function shuffle(arr) {
    var i = arr.length,
        t, j;
    while (i) {
        j = Math.floor(Math.random() * i--); // 
        console.log(Math.floor(Math.random() * i));
        t = arr[i]; //索引1的值
        arr[i] = arr[j]; //给索引1赋值
        arr[j] = t;
        //实质就是一次循环交换两个数的位置
    }
}
shuffle(a);
//es6版本
function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}
//参考链接：https://blog.oldj.net/2017/01/23/shuffle-an-array-in-javascript/
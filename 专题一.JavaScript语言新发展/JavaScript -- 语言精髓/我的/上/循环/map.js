const arr = [1, 2, 3, 4, , ];
const myobj = {
    name: 'zhang'
}
/* 4,
value:数组中的每一项
key:索引
arr:原数组
*/
const new_arr = arr.map(function(value, key, arr) {
    return value * 2;
}, myobj)
//myobj是this
console.log(new_arr);
/* 
返回一个新数组，每个元素都是回调函数的结果
会循环数组里面的undefined
[ 2, 4, 6, 8 ]
*/
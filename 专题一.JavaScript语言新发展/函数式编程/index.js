/*
 * @Author: zhangJuxin
 * @LastEditors: zhangJuxin
 * @Description: file content
 * @Date: 2019-03-19 20:04:58
 * @LastEditTime: 2019-03-20 19:11:00
 */
/* 
bind 深拷贝 面试必考
*/
//不纯的
var min = 18;
var checkage = age => age > min;
//纯的，这很函数式
var checkage = age => age > 18;
//
//
const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs);
const add3 = (a, b, c) => a + b + c;
// 偏应用 `2` 和 `3` 到 `add3` 给你一个单参数的函数 
const fivePlus = partial(add3, 2, 3);
fivePlus(4)
//bind
// bind实现
const add1More = add3.bind(null, 2, 3) // (c) => 2 + 3 + c
// 函数柯里化
var checkage = min => (age => age > min);
var check18 = checkage(18);
check18(20);
//
//接受两个函数，第一个函数处理第二个函数返回的结果
//返回一个函数，函数的参数是上面提到的第二个函数接受的参数
//作用就是，如果要对一个对象两次处理，这样可以变得更简单
const compose = (f, g) => (x => f(g(x)));
/* 
如果compost接受的参数里面需要传两个参数，那么使用柯里化来解决
*/
//取数组翻转后的第一个数
var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = compose(first, reverse);
last([1, 2, 3, 4, 5, ]); //5
// point free
var toUpperCase = word => word.toUpperCase();
var split = x => (str => str.split(x));
//对字符串先转变成大写，然后使用空格进行分割，返回数组
var f = compose(split(' '), toUpperCase);
f("abcd efgh");
// 不使用上面的方式可以这样写
const f = str => str.toUpperCase().split(' ');
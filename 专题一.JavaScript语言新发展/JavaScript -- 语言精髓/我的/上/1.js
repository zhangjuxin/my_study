/* 
var 函数级作用域
let 块级作用域
const 块级作用域 常量
什么也不加 全局作用域
*/
const obj = {};
obj['name'] = 10;
console.log(obj);
// obj = [];-->  Assignment to constant variable.
/* 
函数返回值有两种可能：
1.显示调用return 返回return 后的值
2.没有调用return 返回 undefined
*/
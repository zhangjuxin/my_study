/* 
首先要知道call的作用：
改变this指向
调用的同时函数也执行了
*/
function test(a, b, c) {
    // this.username = 'zhang';
    console.log(this.username, a, b, c);
}
var obj = {
    username: "juxin"
}
/* 
调用test的时候，里面的this指向了obj,所以重写了obj.username
所以后面打印的时候显示zhang
*/
Function.prototype.mycall = function(context) {
    //获取参数，mythis是传入的this
    // var args=[...arguments].slice(1);
    // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    console.dir(arguments[0]);
    var arr = [];
    for (var i = 1; i < arguments.length; i++) {
        arr.push('arguments[' + i + ']');
    }
    // context.fn(arr);
    eval('context.fn(' + arr + ')');
    //this指向了context
    console.log(arr);
    delete context.fn;
    /* 
    arguments
    {
        0:obj
        1:abc
        2:b
        3:c
    }
    */
}
test.mycall(obj, 'abc', 'b', 'c'); //zhang
/* 

Function.prototype.myCall = function(context) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  context.fn = this
  let args = [...arguments].slice(1)
  let result = context.fn(...args)
  delete context.fn
  return result
}
*/
function fn() {
    console.log(this.length);
}
var yideng = {
    length: 5,
    method: function() {
        "use strict";
        fn(); //0  window.length=iframe的数量=0
        arguments[0](); //2  调用fn的是arguments对象，他的长度是2
    }
}
const result = yideng.method.bind(null);
result(fn, 1);
//2.
function yideng(a, b, c) {
    console.log(this.length); //4  这个length指的是arguments对象的length
    console.log(this.callee.length); //1  this.callee.length=fn函数的length
}

function fn(d) {
    arguments[0](10, 20, 30, 40, 50);
}

fn(yideng, 10, 20, 30);
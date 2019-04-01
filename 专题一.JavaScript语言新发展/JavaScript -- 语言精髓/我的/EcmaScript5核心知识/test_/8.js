//yideng is not a function
yideng();
var flag = true;
if (flag) {
    function yideng() {
        console.log('yideng1');
    }
} else {
    function yideng() {
        console.log('yideng2');
    }
}
var min = Math.min(),
    max = Math.max();
console.log(min < max); //false
var big = '支架';
var obj = {
    big: "yideng",
    showbig: function() {
        return this.big;
    }
}
obj.showbig.call(big); //function(){}
/* 
this是字符串，字符串对象有big方法
*/
function yideng(a, b, c) {
    console.log(this.length);
    console.log(this.callee.length);
    //this.callee == fn
    //this指的是arguments,length指的是实参
    //window.length指的是页面中iframe的数量
}

function fn() {
    arguments[0](10, 20, 30, 40, 50);
}
fn(yideng, 10, 20, 30);
//4,0
var a = "yideng";

function test() {
    var a = "yideng2";
    var init = new Function("console.warn(a)");
    init();
}
test(); //yideng
console.log({} + []); //[object object]
{} + [] //0
var f = function yideng(a) {
    yideng = a;
    console.log(typeof yideng); //function
    return 23;
}
f('一灯');
console.log(typeof yideng); //undefined
function yideng() {};
yideng.__proto__.__proto__.constructor.constructor.constructor;
/*
yideng.__proto__=Function.prototype
Function.prototype.__proto__=object.prototype
object.prototype.constructor==object
//object.prototype是一个对象，对象的constructor（构造函数）是Object构造函数
//object.constructor是Object.__proto__.constructor，
//Object.__proto__指向父类的原型，Object(一个构造函数)的父类是Function,
object.constructor=function  //object的构造函数是function
object.constructor是object.__proto__.constructor
object.__proto__==Function.prototype
Function.constructor.__proto__指向自己的prototype,所以还是function自己
Function.prototype.constructor==Function
Function.__proto__=Function.prototype
*/
/* 
Object是一个构造函数，他的__proto__指向的是他父类的原型，也就是Function.prototype
Function 构造函数 创建一个新的Function对象。 
在 JavaScript 中, 每个函数实际上都是一个Function对象。

*/
Function.__proto__ == Function.prototype; //true
Object.__proto__ == Function.prototype;
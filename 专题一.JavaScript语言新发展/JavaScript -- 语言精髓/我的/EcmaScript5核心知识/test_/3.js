var x = 1;
if (function f() {}) {
    x += typeof f;
}
console.log(x);
//1undefined
//----//----//----//----//----//----//----
//2.
function f2() {
    /* 
    new 一个函数的时候正常是返回一个对象，
    如果函数有显式的返回一个引用类型，那么就返回return 后面的值，
    本函数中new之后返回的是函数本身所以。。。
    */
    return f2;
}
console.log(new f2() instanceof f2);
//false
//----//----//----//----//----//----//----
// Object是一个构造函数，
Object.prototype.a = 'a';
Function.prototype.a = 'a1';

function person() {};
var yideng = new person();
yideng.__proto__.__proto__ == Object.prototype;
yideng.__proto__ === person.prototype;
console.log(yideng.a); //a
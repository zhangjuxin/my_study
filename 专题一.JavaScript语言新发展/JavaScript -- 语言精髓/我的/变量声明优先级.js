if (!("userName" in window)) {
    var userName = 123;
}
console.log(userName); //123
var obj = {
    user: "zhang",
    getname: function() {
        return this.user;
    }
}
var getnamefn = obj.getname;
console.log(getnamefn()); //undefined
console.log(obj.getname()); //zhang
/* 
作用域有大有小

*/
function f1() {};
console.log(typeof f1.prototype); //object
console.log(typeof Function.prototype); //Function
console.log(typeof Object.prototype); //object
console.log(typeof Function.prototype.prototype); //undefined
/* 
构造函数的返回值：
如果没有返回值或者简单数据类型：对象实例
如果return 对象类型：返回的就是这个对象,为什么呢，看new内部是怎么实现的吧
new Person("John") = {
    var obj = {};
    //__proto__指向父类的原型
    obj.__proto__ = Person.prototype; // 此时便建立了obj对象的原型链：
    // obj->Person.prototype->Object.prototype->null
    var result = Person.call(obj,"John"); // 相当于obj.Person("John")绑定this指针
    return typeof result === 'object' ? result : obj; 
   // 如果无返回值或者返回一个非对象值，则将obj返回作为新对象
}
*/
function people(name) {
    this.name = name;
    // return {};
}
people.prototype.getname = function() {
    console.log(1);
}
var people1 = new people('zhang');
people.prototype.play = function() {
    console.log('play');
}
people1.play();
/* 
constructor:默认指向函数本身
Object.constructor === Function;//为什么
*/
var name = 'global';

function A(name) {
    console.log(name);
    this.name = name;
    var name = 1;
    console.log(name, 'name'); //1
}
A.prototype.name = 2;
var a = new A('3');
console.log(a.name); //3
delete a.name;
console.log(a.name); //2
/* 
函数参数和变量同名的情况下，且变量赋值的情况下，变量高于函数声明
*/
/* 
function test(){}  
var test=10;
test//10
变量赋值的情况下，函数提升了，var test=10;覆盖了函数声明
如果变量没有赋值，只是声明，那么忽略声明
*/
console.log('------');

function fun(n, o) {
    console.log(o);
    //返回一个对象，对象里面有一个fun方法
    return {
        fun: function(m) {
            return fun(m, n);
        }
    }
}
var a = fun(0);
a.fun(1);
a.fun(2);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);
/* 
闭包是什么：
局部作用域
闭包的应用场景：
循环绑定事件的时候，需要闭包
*/
var el = document.getElementsByClassName('test');
for (var i = 0; i < el.length; i++) {
    (function(index) {
        console.log(el[index]);
        el[index].onclick = function() {
            console.log(index);
        }
    })(i) //值传递
}
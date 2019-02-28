function person(name) {
    this.name = name;
}
person.prototype.print = function() {
    console.log(this.name);
}
var p1 = new person('zhang');
var p2 = new person('wang');
p1.print();
p2.print();
/* 
this场景：
    普通函数：
        1.严格模式：undefined
        1.非严格模式：全局对象
    构造函数：对象的实例
    对象方法：对象本身
*/
"use strict"

function fn() {
    // console.log(this);//undefined
}
fn();

function person(name) {
    this.name = name;
    console.log(this, 123);
    //person {name: "zhang"}
}
var p1 = new person('zhang');
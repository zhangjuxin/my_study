var car = function(color) {
    console.log(111);
    this.color = color;
}
car.prototype.sail = function() {
    console.log(`${this.color}的🍎`);
}
var bmw = function(color) {
    car.call(this, color);
}
// var __pro = car.prototype;
var __pro = Object.create(car.prototype);
__pro.constructor = bmw;
console.log(__pro, '__pro');
bmw.prototype = __pro;
console.log(bmw.prototype === __pro);
bmw.prototype.add = function() {}
var m = new bmw('red');
console.log(m);
var s = new car();
console.log(s);
/* 
拿到父类原型链上的方法
不能让构造函数执行两次
引用的原型链不能是按值引用
修改子类的constructor
*/
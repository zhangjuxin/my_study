/**
 * @description: 继承
 * @param {type}:function function
 * @return: 无返回
 */
function inherits(child, parent) {
    var _prototype = Object.create(parent.prototype);
    _prototype.constructor = child.prototype.constructor;
    child.prototype = _prototype;
}
var car = function(color) {
    this.color = color;
}
car.prototype.sail = function() {
    console.log(`${this.color}的🍎`);
}

function person() {
    this.username = "zhang";
}
person.prototype.say = function() {
    console.log('say');
}
inherits(car, person);
var zhang = new person();
var cars = new car('red');
cars.say(); //say
person.sail(); //报错
/* 
子类成功的继承了父类的原型，但是子类添加的原型并没有影响到父类的原型，这就是继承
*/
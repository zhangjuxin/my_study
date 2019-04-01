/* 
请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
 要求:汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
 Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句:
 将 红色的Cruze 买给了小王价格是14万。很多库里会使用Object.create(null)是什么原因么?(20分)
*/
/* es5版本 */
function inherit(parent, child) {
    var _proto = Object.create(parent.prototype);
    _proto.constructor = child.prototype.constructor;
    child.prototype = _proto;
}
console.log('');

function car(color, price) {
    this.color = color;
    this.price = price;
}
car.prototype.sale = function() {
    console.log('haha');
}

function Cruze(color, price) {
    car.call(this, color, price);
}
inherit(car, Cruze);
var mycar = new Cruze('red', '140000');
console.log(mycar.color, mycar.price, mycar.sale());
/* es6版本 */
class car1 {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
    sale() {
        console.log('class car');
    }
}
class car2 extends car1 {
    constructor(color, price) {
        super(color, price);
    }
}
var mycar = new car2('blue', '100');
console.log(mycar.color, mycar.sale());
var b = 10;
(function b() {
    b = 20;
    console.log(b);
})()
console.log(b); //1
console.log('');
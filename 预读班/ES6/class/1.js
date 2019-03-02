/*
 * @Author: zhangJuxin
 * @LastEditors: zhangJuxin
 * @Description: this的问题，class的继承问题，super关键字
 * @Date: 2019-03-01 14:11:44
 * @LastEditTime: 2019-03-01 14:31:09
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        console.log('我是tostring()');
        return '我是tostring()';
    }
}
// 继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        /* 
        子类必须在constructor方法中调用super方法，否则新建实例时会报错。
        这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，
        得到与父类同样的实例属性和方法，然后再对其进行加工，
        加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
        */
        super(x, y); // 调用父类的constructor(x, y)，super必须在this之前调用，否则会报错
        this.color = color;
    }
    toString() {
        console.log(this, 'this'); //ColorPoint 本身
        setTimeout(function() {
            console.log(this, 'set'); //window
        }, 100)
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
var s = new ColorPoint(1, 2, 'red');
console.log(s.toString());
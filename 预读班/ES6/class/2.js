/*
 * @Author: zhangJuxin
 * @LastEditors: zhangJuxin
 * @Description: this的问题，class的继承问题，super关键字
 * @Date: 2019-03-01 14:11:44
 * @LastEditTime: 2019-03-01 15:11:24
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static play() {
        console.log('我是内部属性，play');
    }
    toString() {
        console.log(this);
        Point.play();
        console.log('我是tostring()');
        return '我是tostring()';
    }
}
// 继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)，super必须在this之前调用，否则会报错
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
var s = new Point(1, 2);
console.log(s.toString());
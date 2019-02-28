var obj = {
    age: 10,
    say() {
        console.log(1);
    }
}
obj.__proto__.a = 10;
obj.__proto__.play = function() {
    console.log(10);
}
var b = Object.create(obj);
/* 
使用现有对象提供新创建的对象的__proto__
b.__proto__ == obj
*/
console.log(b);
// -------------------------------------------------------
function test() {
    this.a = 10;
    this.say = function() {
        console.log(10);
    }
}
test.prototype.play = () => {
    console.log(200);
}
var test2 = Object.create(test.prototype);
console.log(test2);
/* 
test2.__proto__ == test.prototype
*/
function inherts(child, old) {
    var _proto = Object.create(old.prototype);
    _proto.constructor = child;
    child.prototype = _proto;
}
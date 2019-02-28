function inherits(child, parent) {
    var _prototype = Object.create(parent.prototype);
    _prototype.constructor = child.prototype.constructor;
    console.log(_prototype, '_prototype');
    child.prototype = _prototype;
}
var car = function(color) {
    console.log(111);
    this.color = color;
}
car.prototype.sail = function() {
    console.log(`${this.color}的🍎`);
}
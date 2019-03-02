function car(color) {
    this.color = color;
}
car.prototype.run = function() {
    console.log(this.color);
}
var cruze = function(color) {
    car.call(this, color);
}
var _prototype = Object.create(car.prototype);
_prototype.constructor = cruze;
console.log(_prototype);
cruze.prototype = _prototype;
var result = new cruze('apple');
console.log(result);
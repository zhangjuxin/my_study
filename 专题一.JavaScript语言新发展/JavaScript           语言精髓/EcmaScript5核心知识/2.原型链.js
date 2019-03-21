var A = function() {};
A.prototype = {};
var a = new A();
A.prototype = {};
var b = new A();
console.log(b.__proto__);
console.log(a instanceof A); //FALSE
console.log(b instanceof A); //TRUE
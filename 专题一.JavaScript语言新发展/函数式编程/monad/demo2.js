var _ = require('lodash');

function square(n) {
    return n * n;
}

function add(a, b) {
    return a + b;
}
/* 把两个函数结合起来 ，先add在square*/
var addSquare = _.flowRight(square, add);
console.log(addSquare(3, 2)); //25
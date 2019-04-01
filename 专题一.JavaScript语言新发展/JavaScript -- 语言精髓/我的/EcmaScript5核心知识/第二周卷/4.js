//- 4.清写出以下代码输出值，并解释原因。(5分)
Object.prototype.a = 'a';

Function.prototype.a = 'a1';

function Person() {};
var yideng = new Person();

console.log('p.a: ' + yideng.a);
console.log(Person.a); //a1
/*  
yideng.__proto__.a==Person.prototype.a
true
Person.prototype.__proto__.a==Object.prototype.a
true
*/

console.log(1..a); //1..a=Number.a
// console.log(1.a);//报错，因为这个点不知道给1还是给a,所以最后1a,1..a就好了

console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
// yideng.__proto__.__proto__.constructor.constructor.constructor === Person.prototype.__proto__.constructor.constructor.constructor === Object.prototype.constructor.constructor.constructor === Object.constructor.constructor === Function.constructor === Function;
//function
// Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢 ?



function test() {};
console.log('test.constructor', test.constructor);
test.__proto__.constructor === Function;

var test1 = new test();
console.log(test1.constructor, 'test1.constructor');

/* 
 找constructor的时候，顺着原型链如果找到了某个对象的prototype.constructor，那么结果就是这个对象
 例子：
 Object.constructor==Object.__proto__.constructor
true
Object.__proto__.constructor==Function
true
Function.constructor==Function.__proto__.constructor==Function
true
 */
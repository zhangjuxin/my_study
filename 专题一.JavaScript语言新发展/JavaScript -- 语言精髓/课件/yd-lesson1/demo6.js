//🌰例子
let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case "number":
                return 123;
            case "string":
                return "str";
            case "default":
                return "default";
        }
    }
}
console.log(3 + obj);
let yideng = {
    [Symbol.toPrimitive]: ((i) => () => ++i)(0)
}
// 3 + obj;
if (yideng == 1 && yideng == 2 && yideng == 3) {
    console.log("京程一灯");
}
/**
 * @description: 
 * {type} 
 * @
 */
/* *
 *@Symbol.toPrimitive
这个 Symbol 为我们提供了重载抽象相等性运算符（Abstract Equality Operator，简写是 ==）。
基本上，当 JavaScript 引擎需要将你  @对象转换为原始值时@，Symbol.toPrimitive 会被用到 —— 
例如，如果你执行 +object ，那么 JavaScript 会调用 object[Symbol.toPrimitive]('number');，
如果你执行 ''+object ，那么 JavaScript 会调用 object[Symbol.toPrimive]('string')，
而如果你执行 if(object)，JavaScript 则会调用 object[Symbol.toPrimitive]('default')。
在此之前，我们有 valueOf 和 toString 来处理这些情况，
但是二者多少有些粗糙并且你可能从不会从它们中获得期望的行为。
Symbol.toPrimitive 的实现如下：

*/
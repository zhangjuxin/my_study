// -3. 请问变量a会被GC回收么， 为什么呢 ? (12 分)
function test() {
    var testa = "yideng";
    return function() {
        debugger; //使用断点查看scope看是否被回收
        eval("");
        //不会被回收，出现eval,浏览器没办法判断a在eveal里面是否有引用，怎么解决，
        // window.eval(""); //这样就解决了eval组织testa变量的回收
    }
}
test()();
console.log();
console.log();


var a = 100;
var obj = {
    a: 10,
    init() {
        /* 加引号和不加引号的区别 */
        var res1 = new Function('console.log(this.a)'); //100
        var res2 = new Function(console.log(this.a, '🍎')); //10
        res1();
        res2();
    }
}
obj.init();


/* with'语句將某个对象添加到作用域链的顶部，如果在statement中有某个未使用命名空间的变量，
跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出ReferenceError异常。
*/


var obj = {};
with(obj) {
    a = 1;
}
console.log(obj.a);
console.log(a); //1

// try---catch 欺骗了词法作用域，e 延迟了作用域链
# js面试题

## 基础

### 函数名只读

```js
//函数表达式
var a1 = function yideng(num) {
    //yideng是只读的 
    yideng = num;
    console.log(typeof yideng); //function
    return 1；
}
a1(1);
console.log(typeof yideng());
//yideng is not defined
//yideng 只可以在函数内部访问，外部访问不到
```
```js
let foo = function() {
        console.log(1)
};
(function foo() {
        foo = 10;
        //匿名函数的函数名是只读的，不能被修改，函数外部访问不到
        console.log(foo);
}())

//---//---//---//---//---//---//---

var a1 = function yideng(num) {
    //yideng是只读的 
    yideng = num;
    console.log(typeof yideng); //function
    return 1；
}
a1(1);
console.log(typeof yideng());
//yideng is not defined
//yideng 只可以在函数内部访问，外部访问不到
```

### 变量提升

```js
function yideng() {
    console.log(1);
}
(function(yideng) {
    yideng();
    yideng = function() {
        console.log(2);
    }

    function yideng() {
        console.log(3);
    }
    yideng();
    var yideng;
    yideng && yideng();
    yideng();
})(yideng)
//3 2 2 2
//相当于下面的代码

(function(yideng){
    function yideng() {
        console.log(3);
    }
    var yideng;
    yideng();//3
    yideng = function() {
        console.log(2);
    }
    yideng();//2
    yideng && yideng();//2
    yideng();//2
})();

//----//----//----//----//----//----
//----//----//----//----//----//----

foo();
if (true) {
    function foo() {
        return 'first';
    }
} else {
    function foo() {
        return 'second';
    }
}

//相当于下面的代码：

var foo;
foo();
if (true) {
    foo = function() {
        return 'first';
    }
} else {
    foo = function() {
        return 'second';
    }
}
```

```js
function foo() {
    return 1;
}
//var foo
if (true) {
    //foo=function...
    // 用函数语句重写
    function foo() {
        return 2;
    }
}
console.log(foo, '1');//2

```

```js
function foo() {
    return 1;
}

function test() {
    if (false) {
        function foo() {
            return 2;
        }
    }
    console.log(foo());
}
test();
//-------------------------相当于下面的代码

function test() {
    var foo;
    if (false) {
        foo = function() {
            return 2;
        }
    }
    console.log(foo());//报错
}
test();

//----------------------------------

function yideng() {
    console.log(1);
}
(function() {
    //var yideng;
    if (false) {
        //yideng=function(){}
        function yideng() {
            console.log(2);
        }
    }
    yideng(); //yideng is not a function,实际执行代码的时候是注释中的部分
})();
/* 两种结果
老式浏览器：IE7以下
函数提升：结果是2
最新的浏览器结果是报错：yideng is not a function

```

```js

function test(a) {
    this.a = a;
}
test.prototype.a = 10;
var s = new test();
//s.a有值，但是是undefined
console.log(s.a); //undefined


console.log(a);
a();
var a = 3;

function a() {
    console.log(10);
}
console.log(a);
a = 6;
a();
/* 
function a() {
    console.log(10);
}
var a;
var a 没有赋值，所以无法覆盖上面的函数，声明的时候不覆盖，赋值的时候覆盖
```

### es6格式的函数不能被new
```js
var s = {
    a: function() {
        console.log(this);
    },
    b() {
        console.log(this);
    },
    c: () => {
        console.log(this);
    }
}
s.b();
var f = s.a.bind(this);
console.log(new f());
//f is not a constructor
// s.b，s.c是以es6的方式定义的函数，不能被实例化，所以报错
```

### 重写引用类型数据
```js
function test(m) {
    m = {
        v: 5
    }
    //重写引用类型，引用就和外边的m没有关系了，添加属性可以，不会失去联系
    //m.v = 100;
}
var m = {
    k: 30
};
test(m);
console.log(m.v); //undefined
```

### 继承：

```js
function person(name) {
    this.name = name;
}
person.prototype.say = function() {
    console.log('say');
}

function man(name) {
    person.call(this, name);
}
var newP = Object.create(person.prototype);
newP.constructor = man;
//创建一个对象，把该对象作为新对象的__proto__，给新对象加方法就直接加，不加到原型上
man.prototype = newP;
man.prototype.play = function() {
    console.log('play');
}
var man1 = new man('张');
//--封装一下继承--
/**
 * @description: 继承
 * @param {type}:function function
 * @return: 无返回
 */
function inherits(child, parent) {
    var _prototype = Object.create(parent.prototype);
    _prototype.constructor = child.prototype.constructor;
    child.prototype = _prototype;
}

//---//---//---//---//---//---
//es6实现
class person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('say');
    }
}
class man extends person {
    constructor(name) {
        super(name);
        super.xx = 10;//相当于this.xx = 10
    }
    play() {
        console.log('play');
    }
}
var man1 = new man('张举欣');
console.log(new person('网这'));
```

### 原型链
```js

var A = function() {};
A.prototype = {};
var a = new A();
A.prototype = {};
var b = new A();
console.log(b.__proto__);
console.log(a instanceof A); //FALSE
console.log(b instanceof A); //TRUE
// instanceof 运算符用于测试构造函数的prototype属性是否出现在了对象的原型链的任何位置
//开始的时候，var a = new A();此时A.prototype=a.__proto__,但是后来重写了A的原型，然后他们之间的联系就断了，所以会出现上述结果




function yideng() {};
yideng.__proto__.__proto__.constructor.constructor.constructor;
//
解析：
/*
yideng.__proto__=Function.prototype
Function.prototype.__proto__=Object.prototype
Object.prototype.constructor=object
object.constructor=Function
function.constructor=function
*/

```

```js
(function() {
    var a = 20;
    var b = c = a;
    /* 
    var b = a;
    c = a;//全局变量
    */
    function a() {}
    console.log(a); //20
})()
```

```js
function test() {};
test.constructor
	===test.__proto__.constructor
	===
```



### this


```js

function yideng(a, b, c) {
    console.log(this); //Arguments
    console.log(this.length); //4
    console.log(this.callee.length); //1
}

function fn(d) {
    arguments[0](10, 20, 30, 40, 50);
    /* 
    (10, 20, 30, 40, 50)这么多参数是传给yideng的参数，arguments.length是传给fn参数的长度，所以是4
    this.callee是指向当前的函数，是fn,fn.length是函数的参数的长度，是1
    arguments是对象，所以是arguments调用的yideng
    */
}
fn(yideng, 10, 20, 30);
```

```js
var big = 'yideng';
var obj = {
    big: 'zhang',
    say: function() {
        return this.big;
    }
}
obj.say.call(big); //ƒ big() { [native code] }
/* 
big上没有big属性，big是一个字符串，也是一个对象，所以会去原型上去找，
找到了big.__proto__也就是父类的原型，里面有一个big的方法
当我们获取对象的方法的时候，本身找不到的时候回去
*/
```

### 其他


```js
console.log({} + []); //[object,object]
{} + {}; //0
/* 
{}+[]:根据语句有限的原则，{}被理解成符合语句块，所以相当于{};+[]
+[]=0
--------------
js把()中的语句当做表达式，
*/
/* 
[]+{}
"[object Object]"
*/
```

```js
window.length指的是页面上iframe的数量
```

### 被忽略的this

如果把null或者undefined作为this的绑定对象传入call，apply，bind,这些值在调用的时候会被忽略，call(null)

### typeof

```js
typeof null === 'object'; 
// 从一开始出现JavaScript就是这样的
//在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。
//对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"。（reference）
```

## 算法
### 实现数组的随机排序

思路：依次交换数组两个位置的值

```js
function shuffle(arr) {
    var i = arr.length,
        t, j;
    while (i) {
        j = Math.floor(Math.random() * i--); // 
        console.log(Math.floor(Math.random() * i));
        t = arr[i];//索引1的值
        arr[i] = arr[j];//给索引1赋值
        arr[j] = t;
        //实质就是一次循环交换两个数的位置
    }
}
shuffle(a);
//es6版本
function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
}
```

### js模拟指针移动

```js
var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
    var pusher = {
            value: "item" + i
        },
        tmp;
    if (i !== 2) {
        tmp = []
        pusher.children = tmp
    }
    arr.push(pusher);
    arr = tmp;
}
console.log(s[0]);


tmp = [];
arr = tmp;
pusher.children  = tmp;
```

### 实现一个判断类型函数

```js
/* 
判断一个值是什么类型
*/
var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    //如果obj是引用类型，那么进行Object.prototype.toString.call，如果是普通类型，那么直接使用typeof
    return typeof obj === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj;
}
```

-----

## ES6

### const

```js
//const(常量)定义一个块级作用域，值不能通过**重新赋值**来改变，并且不能重新声明
const arr=[1,2,3];
arr.push(1);
//这样没问题，因为这不是重新赋值
```

## js元编程

简单来说，元编程就是自己编写自己

### symbol

```js

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
```

### reflect

```js
//reflect-metadata：因为reflect给我们提供的方法太少了，我们可以通过这个npm模块来为reflect添加方法

require("reflect-metadata")
class C {
    // @Reflect.metadata(metadataKey, metadataValue)
    method() {
    }
}
Reflect.defineMetadata("yideng", "🌶  🌰", C.prototype, "method");

let metadataValue = Reflect.getMetadata("yideng", C.prototype, "method");
console.log(metadataValue);
```

### Proxy

```js
let laoyuan = {
    age: 30
}
const validator = {
    set(target,key,value){
        if(typeof value!="number" || Number.isNaN(value)){
            throw new Error("年龄得是数字");
        }
    }
}
const proxy = new Proxy(laoyuan,validator);
proxy.age = "京程一灯";
```

### 尾调用优化 Tail Call Optimisation(TCO)

```js
//TCO 直接支持浏览器的TCO
function test(i){
    return test(i--,i)
    TCO_ENABLED = true;
}
test(5);
```


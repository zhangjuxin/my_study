# js知识

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



# 函数式编程

## 范畴论

- 函数式编程是范畴论的数学分支，是一门复杂的数学，认为世界上所有的概念体系都可以抽象出一个个范畴论。
- 成员彼此存某种关系概念、事物、对象等等，解构成范畴。任何事物只要找出他们之间的关系，就能定义成为范畴
- 反应范畴成员之间的关系叫做**态射**，范畴论认为，**同一个范畴的所有成员通过“态射”，一个成员可以变形为另外一个成员**

总结：

> 函数式编程不是指用函数编程
> 函数式编程是指用一些数学的方式加上js的语法进行的编程 函数式编程里面没有if else while等语句 以及变量的概念

## 函数式编程特性

- 函数式一等公民。所谓“第一等公民”，指的式函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另外一个函数，或者作为别的函数返回值。
- 不可改变量。在函数式编程中，我们通常理解的变量在函数式编程中也被函数替代了；在函数式编程中变量仅仅代表某个表达式。这里所说的“变量”是不能被修改的。所有的变量只能被赋一次初值
- map & reduce 他们是常用的函数式编程的方法。

总结：

> 1. 函数是‘第一等公民’
> 2. 只有‘表达式’，不用‘语句’
> 3. 没有“副作用”
> 4. 不修改状态
> 5. 引用透明（函数运行只靠参数）

## 纯函数

对于相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。

例如：

```
let xs = [1,2,3,4,5];
//Array.slice是纯函数，因为他没有副作用，对于固定的输入，输出总是固定的
slice  √
xs.slice(0,3);
xs.slice(0,3);
//总是得到的输出是 [1,2,3,4]

splice ×
xs.splice(0,3);//[1,2,3]  
xs.splice(0,3);//[4,5]
复制代码
```

### 优缺点

- 优点 纯函数不仅可以有效的降低系统的复杂度，还有很多很棒的特性，例如可缓存性

- 缺点 例如

  ```js
    //不纯的
    var min = 18;
    var checkage = age => age > min;
  
    //纯的
    var checkage = age => age > 18;
  复制代码
  ```

  在不纯的版本中，checkage不仅取决于参数age 还有外部依赖的变量 min。 纯的checkage 把关键字18 硬性 编码在函数内部，扩展性较差，所以就引出了函数柯里化来优化这一问题

## 函数的柯里化

传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

例 Ⅰ 柯里化上面的 checkage函数

```
var checkage = min => (age => age >min);
checkage(18)(20);//true
复制代码
```

例 Ⅱ

```
//柯里化之前
function add(x,y){
    return x + y;
}
add(1,2) //3

//柯里化之后
function addX(y){
    return function(x){
        return x + y;
    }
}
addX(2)(1) //3
复制代码
```

例 III 利用bind 传递部分参数 实现柯里化

```
function foo(p1,p2){
    this.val = p1 + p2;
}
var bar = foo.bind(null,'p1');
var baz = new bar('p2');
console.log(baz.val);
复制代码
```

## 函数的组合

纯函数以及如何把它柯里化写出的洋葱代码 h(g(f(x))),为了解决函数嵌套的问题，我们需要用到‘函数组合’

```
const compose = (f,g) => f(x => f(g(x)));
var first = arr => arr[0];
var reverse = arr => arr.reverse();
var last = compose(first, reverse);
last([1,2,3,4,5]);  //5
复制代码
```

## Point Free

- 把一些对象自带的方法转化成纯函数，不要命名转瞬即逝的中间变量
- 例如 如下函数，我们使用str作为我们中间的变量，但是这个中间变量除了让代码变得长了一点之外是毫无意义的。

```
    const f = str => str.toUpperCase().split(' ');
复制代码
```

转化为如下风格

```
    var toUpperCase = word => word.UpperCase();
    var split = x => (str => str.split(x));

    var f = compose(split(' '),toUpperCase);

    f("abcd efgh");
复制代码
```

这种风格能够帮助我们减少不必要的命名，让代码保持简洁和通用。

## 声明式与命令式代码

> 命令式代码的意思就是，我们通过编写一条又一条指令去让计算机执行一些动作，这其中一般都会涉及到很多繁杂的细节。而声明式就要优雅很多了，我们通过写表达式的方式来声明我们想干什么，而不是通过一步一步的指示。

```
    //命令式：
    let CEOs = [];
    for(var i = 0; i < companies.length;i++){
        CEOs.push(companies[i].CEO);
    }

    //声明式
    let CEOs = companies.map(c => c.CEO);
复制代码
```

### 优缺点

```
函数式编程的一个明显的好处就是这种声明式的代码，对于无副作用的纯函数，我们完全可以不考虑函数内部式如何实现的，专注于编写业务代码。优化代码时，目光只需要集中在这些稳定坚固的函数内部即可。
复制代码
```

相反，不纯的函数式的代码会产生副作用或者依赖外部系统环境，使用它们的时候总要考虑这些 不干净的副作用。在复杂的系统种，这对于程序猿🦍的心智来说是极大的负担。

## 惰性求值、惰性函数

> 在指令式语言中以下代码会按顺序执行，由于每个函数都有可能改动或者依赖于其外部的状态，因此必须顺序执行。

```
function somewhatlongOperation(){somewhatlongOperation}
复制代码
```

## 高阶函数

> 函数当参数，把传入的函数作为一个封装，然后返回这个封装函数，达到更高程度的抽象。

```
//命令式
var add = function(a,b){
    return a + b;
};
function math(func,array){
    return func(array[0],array[1]);
};
math(add,[1,2]);   //3 
复制代码
```

## 尾调用优化

> 指函数内部的最后一个动作是函数调用。该调用的返回值，直接返回给函数。函数调用自身，称为递归。如果尾调用自身，就称为尾递归。递归需要保存大量的调用纪录，很容易发生栈溢出错误，如果使用尾递归优化，将递归变为循环，那么只需要保存一个调用纪录，这样就不会发生栈溢出错误了。

```
function factorial(n){
    if(m === 1) return 1;
    return n * factorial(n -1);
}
function factorial(n,total){
    if(n === 1) return total;
    return factorial(n-1,n * total)
} //ES6强制使用尾递归
复制代码
```

**console.trace() 查看调用帧**

## 闭包

缓存了当前上下文执行环境的词法作用域

## 范畴与容器

- 函数不仅可以用于统一范畴之中值的转换，还可以用于将一个范畴转成另一个范畴。这就涉及到了函子（**Functor**）
- 函子是函数式编程里面最重要的数据类型，也是基本的运算单位和功能单位。它首先是一种范畴，也就是说，是一个容器，包含了值和变形关系。比较特殊的是，它的变形关系可以依此作用于每一个值，将当前容器变形成为另一个容器。

## 函子 Functor

- Functor 遵守一些特定规则的容器类型。
- Functor 是一个对于函数调用的抽象，我们赋予容器自己去调用函数的能力。把东西装进一个容器，只留出一个接口map给容器外的函数，map一个函数时，我们让容器自己来运行这个函数，这样容器就可以自由地选择何时何地如何操作这个函数，以致于拥有惰性求值，错误处理，异步调用等等非常牛掰的特性。

```
var Container = function(x){
    this.__value = x;
}
//函数式编程一般约定，函子有一个 of 方法
Container.of = x => new Container(x);
//Container.of('abcd');
//一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。

Container.prototype.map = function(f){
    return Container.of(f(this.__value))
}

Container.of(3)
    .map(x => x + 1)        //结果为  Container(4)
    .map(x => 'Result is' + x); //结果为 Container('Result is 4')
复制代码
```

### map

```
class Functor{
    constructor(val){
        this.val = val;
    }
    
    map(f){
        return new Functor(f(this.val));
    }
}

(new Functor(2)).map(function(tow){
    return tow + 2;
})

//Functor(4)
复制代码
```

上面代码中，Functor是一个函子，它的map方法接受函数f作为参数，然后返回一个新的函子，里面包含的值是被f处理过的(f(this.val))。 一般约定，函子的标志就是容器具有map方法。该方法将容器里的每一个值，映射到另一个容器。 上面的例子说明，函数式编程里面的运算，都是通过函子完成，即运算不直接针对值，而是针对这个值的容器---函子。函子本身具有对外接口（map方法）,各种函数就是运算符，通过接口接入容器，引发容器里面的值的变形。

总结：

> 首先 函子 是一个容器 它特殊在 有map 方法 ，通过map方法 接受一个变形关系，映射出另外一个函子。编程面向不直接操作值，而是通过操作函数，将原来的集合 转化为一个新的集合

### of方法

函数式编程一般约定，函子有一个of方法，用来生成新的容器。 所以上面代码改写成

```
class Functor{
    constructor(val){
        this.val = val;
    }
    static of(val){
        return new Functor(val);
    }
    map(f){
        return new Functor(f(this.val));
    }
}

Functor.of(2).map(function(tow){
    return tow + 2;
})

//Functor(4)
复制代码
```

### maybe 函子 (函数式编程中的 if else)

函子接受各种函数，处理容器内部的值。这里就有一个问题，容器内部的值可能是一个空值（比如null）, 而外部函数未必又处理空值的机制，如果传入空值，很可能就会报错。

例如如下代码 就熄火了

```
Functor.of(null).map(function(s){
    return s.toUpperCase();
})

class Maybe extends Functor{
    map(f){
        return this.val?Maybe.of(f(this.val)):Maybe.of(null);
    }
}
Maybe.of(null).map(function(s){
    return s.toUpperCase();
})
//Maybe(null)
复制代码
```

#### 如何实现 maybe 函子

```
var Maybe = function(x){
    this.__value = x;
}
Maybe.of = function(x){
    return new Maybe(x);
}
Maybe.prototype.map = function(f){
    return this.isNothing()?Maybe.of(null):Maybe.of(f(this.__value));
}
Maybe.prototype.isNothing = function(){
    return (this.__value === null || this.__value === undefined);
}
复制代码
```

### 错误处理、Either

- 我们的容器能做的事情太少了，try/catch/throw 并不是“纯”的，因为它从外部接管了我们的函数，并且在这个函数出错时抛弃了它的返回值。
- Promise是可以调用catch来集中处理错误的
- 事实上Either并不只是用来做错误处理的，它表示了逻辑或与，范畴学里的coproduct.

#### Either的实现

条件运算符if..else是最常见的运算之一，函数式编程里面，使用Either函子表达。Either函子内部又两个值：左值(left)和右值(Right)。右值是正常情况下使用的值，左值是右值不存在的时候使用的默认值。

```
class Either extends Functor{
    constructor(left,right){
        this.left = left;
        this.right = right;
    }
    static of(left,right){
        return new Either(left,right);
    }
    map(f){
        return this.right?
            Either.of(this.left,f(this.right)):
            Either.of(f(this.left),this.right);
    }
}

var addOne = function(x){
    return x + 1;
}

Either.of(5,6).map(addOne);
//Either(5,7);

Either.of(1,null).map(addOne);
//Either(2,null)

Either.of({address:'xxx'},currentUser.address).map(updateField);
复制代码
```

### AP函子

函子里面包含的值，完全可能是 函数。我们可以想象这样一个情况，一个函子的值是数值，另一个函子的值是函数。

```
class Ap extends Functor{
    ap(F){
        return Ap.of(this.val(F.val));
    }
}
Ap.of(addTwo).ap(Functor.of(2));
复制代码
```

### IO函子

1. 真正的程序总要去接触肮脏的世界。

   ```
    function readLocalStorage(){
        return window.localStorage;
    }
   复制代码
   ```

2. IO跟前面那几个Functor不同的地方在于，它的__value是一个函数。它把不纯的操作（比如IO、网络请求、DOM）包裹到一个函数内，从而延迟这个操作的执行。所以我们认为，IO包含的是被包裹的操作的返回值

3. IO其实也算是惰性求值

4. IO负责了调用链积累了很多很多不纯的操作，带来的复杂性和不可维护性

```
import _ from 'lodash';
var compose = _,flowRight;

var IO = function(f){
    this.__value = f;
}

IO.of = x => new IO(_=>x);

IO.prototype.map = function(f){
    return new IO(compose(f,this.__value))
};

//ES6 写法
import _ from 'lodash';
var compose = _.flowRight;
class IO extends Monad{
    map(f){
        return IO.of(compose(f,this.__value))
    }
}
复制代码
var fs = require('fs');
var readFile = function(filename){
   return new IO(function(){
       return fs.readFileSync(filename,'utf-8';)
   });
};

readFile('./user.txt')
.flatMap(tail)
.flatMap(print)

//等同于
readFile('./user.txt')
.chain(tail)
.chain(print)
复制代码
```

### Monad

- Monad就是一种设计模式，表示将一个运算过程，通过函数拆解成互相链接的多个步骤。你只要提供下一步运算所需要的函数。整个运算就会自动执行下去
- Promise就是一种Monad。
- Monad让我们避开了嵌套式地狱，可以轻松地进行深度嵌套的函数式编程，比如IO和其他异步任务。
- 记得让IO继承Monad.

```
class Monad extends Functor{
    join(){
        return this.val;
    }
    flatMap(f){
        return this.map(f).join();
    }
}
复制代码
```

> Monad函子的作用是，总是返回一个单层的函子。它有一个flatMap方法，与map方法作用相同，唯一的区别是如果生成了一个嵌套函子，它会去除后者内部的值，保证返回的永远是一个单层的容器，不会出现嵌套的情况。 如果 函数 f 返回的是一个函子，那么this.map(f)就会生成一个嵌套的函子。所以，join方法保证了flatMap方法总是返回一个单层的函子。这意味着嵌套的函子会被铺平。




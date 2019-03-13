# js面试题

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

相当于下面的代码：

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
    console.log(foo());
}
test();



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
let foo = function() {
        console.log(1)
   }
    (function foo() {
        foo = 10;
        //匿名函数的函数名是只读的，不能被修改，函数外部访问不到
        console.log(foo);
    }())



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

function test(a) {
    this.a = a;
}
test.prototype.a = 10;
var s = new test();
//s.a有值，但是是undefined
console.log(s.a); //undefined
```

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

```js
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

继承：

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
```

```js
var A = function() {};
A.prototype = {};
var a = new A();
A.prototype = {};
var b = new A();
console.log(b.__proto__);
console.log(a instanceof A); //FALSE
console.log(b instanceof A); //TRUE
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
function yideng(a, b, c) {
    console.log(this); //Arguments
    console.log(this.length); //4
    console.log(this.callee.length); //1
}

function fn(d) {
    arguments[0](10, 20, 30, 40, 50);
    /* 
    arguments是对象，所以是arguments调用的yideng
    */
}
fn(yideng, 10, 20, 30);
```

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

```js
window.length指的是页面上iframe的数量
```


(function name() {});
//因为括号()是一个分组操作符，他的内部只能包含表达式，
try {
    // (var x = 5); // 分组操作符，只能包含表达式而不能包含语句：这里的var就是语句
} catch (err) {
    console.log(err); //报错
}
// 千万别这样做！
// 因为有的浏览器会返回first的这个function，而有的浏览器返回的却是第二个
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
//--------------
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
// 相反，这样情况，我们要用函数表达式
// var foo;
// if (true) {
//     foo = function() {
//         return 'first';
//     };
// } else {
//     foo = function() {
//         return 'second';
//     };
// }
// foo();
/* 
函数声明只能出现在程序或者函数体内，从句法上讲，他们不能出现在block(块)内，例如，if(),while(),for()
因为块内只能包含表达式，不能包含函数声明语句，
*/
// 函数声明
function foo() {
    return 1;
}
//var foo
console.log(foo, '1');
if (true) {
    //foo=function...
    // 用函数语句重写
    function foo() {
        return 2;
    }
}

function foo() {
    return 1;
}

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
console.log(foo, '2');
let foo = function() {
    console.log(1)
};
(function foo() {
    foo = 10;
    console.log(foo);
}())
//---------------
//---------------
function test(a) {
    this.a = a;
}
test.prototype.a = 10;
var s = new test();
//s.a有值，但是是undefined
console.log(s.a); //undefined
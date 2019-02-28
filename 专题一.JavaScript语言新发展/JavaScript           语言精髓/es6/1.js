/* 
历史：
Netscape
*/
/* 
模块特色：
AMD
cmd

*/
function test() {
    return {
        a: 1
    }
}
var f = test();
console.log(f.a);
var a = 1;
var obj = {
    a,
    [a + 1]: 3,
    add() {
        console.log(1);
    }
}
// obj[a+1]=3;  es5
/* 
obj:
"{"2":3,"a":1}"
*/
function aa(...args) {
    //args变成了一个真数组
    return args.join(',');
    // Array.prototype.call.splice(arguments);
}
class a {
    constructor() {}
    get() {}
}

function inherit(c, p) {
    var f = function() {};
    f.prototype = p.prototype;
    c.prototype = new f();
    c.prototype.constructor = c;
    c.uper = p;
}

function student(age, num) {
    student.uber.call(this, args);
    this.num = num;
}
inherit(student, people);
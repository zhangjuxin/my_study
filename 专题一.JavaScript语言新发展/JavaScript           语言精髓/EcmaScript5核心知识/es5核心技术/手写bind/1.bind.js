function test() {
    this.geta = function(a) {
        this.a = 199;
        console.log(this.a, a);
    }
}
var abc = {
    a: 100
}
var s = new test();
/* 
bind是函数有的方法
bind方法返回一个函数
这个函数把调用改方法的函数的this改变了
*/
Function.prototype.mybind = function(mythis) {
    /* 
    mythis:this
    args:参数-->[10]
    */
    var args = Array.prototype.slice.call(arguments, 1);
    var that = this;
    var found = function() {};
    var test = function() {
        //newArgs是new的时候穿的参数
        var newArgs = Array.prototype.slice.call(arguments);
        /* 
        如果new了，那么这个函数就是构造函数，this指向实例，
        */
        // console.log(this);
        that.apply(this instanceof test ? this : mythis, args.concat(newArgs));
    }
    //给返回的函数绑定原型，让返回的函数也可以有调用bind函数的原型
    found.prototype = this.prototype;
    test.prototype = new found();
    return test;
}
//var bindfn = 
s.geta.mybind(abc, 10)();
/* 
new的时候，接受的参数
*/
// var s1 = new bindfn();
// console.log(s1.a);
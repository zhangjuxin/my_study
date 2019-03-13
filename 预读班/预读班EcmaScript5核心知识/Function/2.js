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
var p = s.b.bind(this);
new p(); // p is not a constructor
//es6的函数声明（简单声明，箭头函数）不能被实例化
//-------------------------------------------------
this.test = 11;
var s = {
    a: function() {
        console.log(this);
    }
}
var f = s.a.bind(this);
var newf = new f(); //this-->实例
//--------------------------------
// [,,].length
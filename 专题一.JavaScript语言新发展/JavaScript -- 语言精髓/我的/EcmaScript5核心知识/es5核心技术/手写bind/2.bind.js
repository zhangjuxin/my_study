var value = 2;
var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind(foo, 'daisy');
//bindFoo 返回的函数（函数的this已经被改变）
var obj = new bindFoo('18'); //new之后返回的对象this指向实例，和foo没关系了
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
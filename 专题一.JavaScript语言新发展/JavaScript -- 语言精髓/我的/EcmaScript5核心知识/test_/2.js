(function(x) {
    //delete 不能删除局部变量
    delete x;
    console.log(x);
    return x;
})(1);
/* 
1.如果你试图删除的属性不存在，那么delete将不会起任何作用，但仍会返回true
如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete操作只会在自身的属性上起作用）
任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。
这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
任何用let或const声明的属性不能够从它被声明的作用域中删除。
不可设置的(Non-configurable)属性不能被移除。这意味着像Math, Array, Object内置对象的属性以及使用Object.defineProperty()方法设置为不可设置的属性不能被删除。
*/
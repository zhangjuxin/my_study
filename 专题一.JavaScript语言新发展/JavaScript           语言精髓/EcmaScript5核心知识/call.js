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
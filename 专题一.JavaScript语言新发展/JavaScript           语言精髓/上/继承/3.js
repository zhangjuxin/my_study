// 定义一个动物类（父类）
function Animal(name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function() {
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};

function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
// 感谢 @学无止境c 的提醒，组合继承也是需要修复构造函数指向的。
Cat.prototype.constructor = Cat;
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
cat.eat('🍉');
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃haha：' + food);
};
cat.eat('🍉');
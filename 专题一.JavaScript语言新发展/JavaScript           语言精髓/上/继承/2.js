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
// Test Code
var cat = new Cat();
console.log(cat.name);
// cat.eat();  cat.eat is not a function
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
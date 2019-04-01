/* 
继承的两个目标：
    得到对象的属性
    得到对象的方法
*/
function people(name, age) {
    this.name = name;
    this.age = age;
}
people.prototype.say = function() {
    console.log('say');
}

function inherits(child, parent) {
    var _prototype = Object.create(parent.prototype);
    _prototype.constructor = child.prototype.constructor;
    console.log(_prototype, '_prototype');
    child.prototype = _prototype;
}

function english(name, age, language) {
    people.call(this, name, age);
    this.language = language;
}
// console.log(english.prototype.__proto__ == Object.prototype); //true
// console.log(english.prototype.constructor == english);
inherits(english, people);
english.prototype.introduce = function() {
    console.log(this);
    console.log(this.language);
}
people.prototype.say2 = function() {
    console.log('new_say');
}
var eng1 = new english('zhang', 10, 'en');
console.dir(eng1);
eng1.say2();
eng1.introduce();
// english.say();
//指向创建该对象的构造函数原型-->父类的原型
// class english extends people {
//     constructor(name, age, language) {
//         //继承父亲的
//         super(name, age);
//         this.language = language;
//     }
// }
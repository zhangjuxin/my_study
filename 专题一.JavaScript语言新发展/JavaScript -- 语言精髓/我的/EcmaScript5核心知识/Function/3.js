function person(name) {
    this.name = name;
}
person.prototype.say = function() {
    console.log('say');
}

function man(name) {
    person.call(this, name);
}
var newP = Object.create(person.prototype);
newP.constructor = man;
//创建一个对象，把该对象作为新对象的__proto__，给新对象加方法就直接加，不加到原型上
man.prototype = newP;
man.prototype.play = function() {
    console.log('play');
}
var man1 = new man('张');
class person {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('say');
    }
}
class man extends person {
    constructor(name) {
        super(name);
        super().sex = 100;
        super.xx = 10; //相当于this.xx = 10
    }
    play() {
        console.log('play');
    }
}
var man1 = new man('张举欣');
console.log(new person('网这'));
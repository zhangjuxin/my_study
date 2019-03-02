let juxin = function*() {
    yield "🍔";
    yield "🍦";
}
console.log(juxin().next());
console.log(juxin().next());
console.log(juxin().next());
class people {
    constructor(age) {
        this.age = age;
    }
    tell() {
        console.log(`小王的年龄是${this.age}`);
    }
}
class man extends people {
    constructor(age) {
        super(age);
        this.arr = [];
    }
    tell() {
        super.tell();
    }
    //设置meun属性的时候回调用此函数
    set menu(data) {
        this.arr.push(data);
    }
    //获取menu属性的时候回调用此函数
    get menu() {
        console.log(this);
        return this.arr;
    }
    //静态方法
    static init() {
        console.log('static');
    }
}
const xiaowang = new man(30);
xiaowang.menu = '西红柿';
console.log(xiaowang.menu);
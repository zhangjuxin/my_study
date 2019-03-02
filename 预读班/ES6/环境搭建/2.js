const eat = {
    a: 10,
    geteat() {
        return '🍗';
    }
}
const drink = {
    getdrink() {
        return '🍺';
    }
}
let sunday = Object.create(eat);
console.log(sunday);
//获取sunday的__proto__
console.log(Object.getPrototypeOf(sunday));
Object.setPrototypeOf(sunday, drink);
console.log(sunday);
// 显示的改变
let subday = {
    __proto__: drink,
    getdrink() {
        return super.getdrink() + "咖啡"
    }
}
console.log(subday.getdrink());
console.log(subday);
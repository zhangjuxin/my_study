function isNumber(obj) {
    return Object.prototype.toString.call(obj) === "[object Number]";
}
isNumber(10);
/* 
number 的tostring方法
*/
function fn() {
    this.i = 0;
    setTimeout(() => {
        console.log(this.i);
    }, 2000)
}
fn();
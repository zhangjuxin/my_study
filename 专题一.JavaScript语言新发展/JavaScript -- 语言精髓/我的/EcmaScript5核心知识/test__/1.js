console.log(a);
a();
var a = 3;

function a() {
    console.log(10);
}
console.log(a);
a = 6;
a();
/* 
变量名和函数名一样的时候，如果变量名没有赋值，那么无效，是函数
*/
// 预编译
// 1、创建AO对象 (执行期上下文)
// 2、找形参和变量声明（变量提升），将变量和形参最为AO属性名，值为undefined
// 3、将实参值和形参统一
// 4、在函数体里面找函数声明，值赋予函数
var a = function yideng(num) {
    yideng = num;
    typeof yideng;
}
a(1);
var test = {
    a() {
        console.log(1);
    }
    //
}
new test.a();
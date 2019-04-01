function test() {
    var a = "yideng";
    return function() {
        debugger;
        window.eval();
    }
}
test()();
//1.eval 不对lexicalenvirmoent 任何的变量进行解除绑定 保留 window.eval
//2.with 不会 浏览器一旦遇到with 放弃所有变量的回收
// var obj = {};
// with(obj){
//     a=1;
// }
// console.log(obj.a);
// var a= 20;
//3.如果调用了大函数
// function init(){
//     var a = 30;
//     var s = new Function("console.log(a)");
//     s();
// }
// init();
//4.try---catch 欺骗了此法作用域名 Catch---e 延长了作用域链
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
function a() {
    console.log(10);
}
var a;
var a 没有赋值，所以无法覆盖上面的函数，声明的时候不覆盖，赋值的时候覆盖
*/
//------//------//------//------//------//------//------//------//------
//------//------//------//------//------//------//------//------//------//------
//函数表达式
var a1 = function yideng(num) {
    //yideng是只读的 
    yideng = num;
    console.log(typeof yideng); //function
    return 1；
}
a1(1);
console.log(typeof yideng());
//yideng is not defined
//yideng 只可以在函数内部访问，外部访问不到
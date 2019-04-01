(function() {
    var a = 20;
    var b = c = a;
    /* 
    var b = a;
    c = a;//全局变量
    */
    function a() {}
    console.log(a); //20
})()

function test(m) {
    m.v = 20;
}
var m = {
    age: 30
}
test(m);
console.log(m.v); //20
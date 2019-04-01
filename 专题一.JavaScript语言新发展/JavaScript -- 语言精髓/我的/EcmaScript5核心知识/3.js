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
function yideng() {
    console.log(1);
}
(function() {
    //var yideng;
    if (false) {
        //yideng=function(){}
        function yideng() {
            console.log(2);
        }
    }
    yideng(); //yideng is not a function,实际执行代码的时候是注释中的部分
})();
/* 
老式浏览器：IE7以下
函数提升：结果是2
最新的浏览器结果是报错：yideng is not a function
ti's
super.xxx=10
*/
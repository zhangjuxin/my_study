/* 
-、*、/、% ：一律转换成数值后计算
+：

数字 + 字符串 = 字符串， 运算顺序是从左到右
数字 + 对象， 优先调用对象的valueOf -> toString
数字 + boolean/null -> 数字
数字 + undefined -> NaN


[1].toString() === '1'
{}.toString() === '[object object]'
NaN !== NaN 、+undefined 为 NaN

*/
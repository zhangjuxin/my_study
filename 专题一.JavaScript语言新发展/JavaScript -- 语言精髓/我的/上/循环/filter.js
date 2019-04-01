const arr = [1, 2, 3, 4];
var new_arr = arr.filter(function(value) {
    console.log(this == arr); //true
    return value > 1;
}, arr)
console.log(new_arr); //[ 2, 3, 4 ]
/*
filter创建一个数组，包含通过函数测试的元素
*/
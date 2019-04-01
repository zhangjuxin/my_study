var arr = [1.3, 23, 3, 4, 5, , ];
var myobj = {
    name: 10
}
//循环**数组**的每一个值
//空的不循环
arr.forEach(function(value, key, array) {
    console.log(value, key, this);
    //在for each中不能终止循环，会报错
    // break;
}, myobj);
//myobj指的是循环体内部的this，使用箭头函数的时候会被忽略
console.log(arr);

var words = ["one", "two", "three", "four"];
words.forEach(function(word) {
    console.log(word);
    if (word === "two") {
        //删除数组的第一项
        words.shift();
    }
    console.log(word, 'words');
});
console.log(words);
/*  
one
one words
two
two words
four
four words
[ 'two', 'three', 'four' ]
解析：
当到达包含值 "two" 的项时，整个数组的第一个项被移除了，这导致所有剩下的项上移一个位置。
因为元素 "four" 现在在数组更前的位置，"three" 会被跳过。 forEach() 不会在迭代之前创建数组的副本。
*/
function* helloWorldGenerator() {
    yield function() {
        console.log((yield));
    };
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();
/* 
执行函数返回的是一个指针对象，需要调用里面的next方法去移动状态，
一个yield就是一个状态，遇到return，返回的value就是return后面的值，done就是true
*/
console.log(hw);
console.log(hw.next().value());
/* 
{value: "hello", done: false}
value是yield表达式的值，done表示是否结束遍历
*/
console.log(hw.next().value);
console.log(hw.next());
console.log(hw.next());

function* f() {
    console.log('执行了！')
}
var generator = f();
console.log(generator.next());
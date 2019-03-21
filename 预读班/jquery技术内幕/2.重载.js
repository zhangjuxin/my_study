/*给某个对象添加方法的函数*/
function addMethod(object, name, fn) {
    var old = object[name];
    //第一次old是 undefined
    //第二次的时候old就是上次添加的哪个finds函数
    object[name] = function() {
        console.log(...arguments, 'arguments');
        //如果调用函数的参数长度等于fn的参数长度,那就返回当前函数
        if (fn.length == arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old == 'function') {
            console.log(this, 'this'); //people
            //如果当前的调用不匹配那么调用上一次的old,直到匹配为止
            return old.apply(this, arguments);
        }
    }
}
/* 
通过其length属性，可以知道**声明了多少命名参数**
通过arguments.length可以知道实际传入了多少个参数
*/
var people = {};
addMethod(people, 'finds', function() {
    return '0个参数';
})
addMethod(people, 'finds', function(firstname) {
    return '1个参数';
})
addMethod(people, 'finds', function(firstname, lastname) {
    return '2个参数';
})
console.log(people.finds('1', '2'));
console.log(people.finds());
console.log(people.finds('1'));
/* 
isDeep,target,obj1,obj2
*/
function extend() {
    var deep = false;
    var name, options, src, copy;
    var length = arguments.length;
    //记录要复制对象的下标
    var i = 1;
    //第一个参数不传的话，target默认是第一个参数
    var target = arguments[0] || {};
    //如果第一个参数是布尔值，那么第二个参数才是target
    if (typeof target == "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    //如果target不是对象，我们是无法进行复制的，所以设为{}
    if (typeof target !== "object") {
        target = {};
    }
    //循环要复制的对象们
    for (; i < length; i++) {
        options = arguments[i];
        //防止extend(,,)
        if (options != null) {
            for (name in options) {
                //目标属性值
                src = target[name];
                //要复制对象的属性值
                copy = options[name];
                //如果属性值是对象，那么还要递归
                if (deep && copy && typeof copy == "object") {
                    target[name] = extend(deep, src, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}
var obj = {
    name: 'zhang',
    say() {
        console.log(1);
    },
    arr: [{
        id: 1,
        s: 2
    }]
}
var new_obj = extend(true, obj);
new_obj.name = 'ju';
console.log(new_obj.name, obj.name);
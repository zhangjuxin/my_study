/* 
null
数组
对象
函数
普通字符串
json
*/
function deep(source) {
    var target = {};
    for (var key in source) {
        //是对象,除了数组，判断对象里面是否包含循环出来的属性
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            //如果遍历出来的还是对象
            if (key !== null && typeof key === 'object') {
                target[key] = deep(source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

function deep2(source) {
    //过滤 null 单个字符串 函数
    if (!isObject(source)) {
        // if (typeof source !== 'object' || source === null) {
        console.log(source, '非对象');
        return source;
    }
    //兼容数组
    var target = Array.isArray(source) ? [] : {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            //如果遍历出来的是对象，数组，递归
            /* 
                typeof null //"object"
                typeof {} //"object"
                typeof [] //"object"
                typeof function foo(){} //"function" (特殊情况)
            */
            if (isObject(source[key])) {
                target[key] = deep(source[key]);
            } else {
                console.log(1);
                //如果是普通值，直接赋值
                target[key] = source[key];
            }
        }
    }
    return source;
}


function isObject(obj) {
    return typeof obj === 'object' && obj != null;
}

/* 
json无法进行深拷贝
*/
var json = '{"a": "Hello", "b": "World"}';
/* 
json最外层必须是单引号，内层是双引号
*/
console.log(JSON.parse(json));
var newobj = deep2(json);
console.log(JSON.parse(newobj), JSON.parse(json)); //false

var obj = {
    name: "zjx"
}
obj.obj = obj;
console.log(JSON.parse(JSON.stringify(obj)));
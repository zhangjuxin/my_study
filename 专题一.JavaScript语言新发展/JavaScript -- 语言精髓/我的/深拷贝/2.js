var obj = {
    name: 'xiaoming',
    age: 18,
    male: 'man',
    card: ['first', 'second'],
    wife: {
        name: 'abc',
        son: {
            name: [1, 2, 3],
            say() {
                console.log(1);
            }
        }
    }
}
var obj1 = {}
/* 
origin:需要拷贝的对象
target:拷贝后的对象
*/
function deepClone(origin, target) {
    //如果不传就是 { }
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    //循环要拷贝的对象
    for (var prop in origin) {
        //如果是非数组的
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== 'null' && typeof(origin[prop]) == 'object') {
                //如果遍历出来的是object && 如果是数组，继续遍历，target传入[],
                target[prop] = (toStr.call(origin[prop]) == arrStr ? [] : {});
                deepClone(origin[prop], target[prop]);
            } else {
                //如果是数组
                console.log(origin, 'origin', target);
                target[prop] = origin[prop];
            }
        }
    }
    console.log(target);
    return target;
}
deepClone(obj, obj1);
obj1.name = 'wang';
console.log(obj1.name, obj.name);
// 深拷贝
/* 

*/
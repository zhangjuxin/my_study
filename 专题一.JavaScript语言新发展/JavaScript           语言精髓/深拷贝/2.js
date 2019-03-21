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

function deepClone(origin, target) {
    var target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
    for (var prop in origin) {
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] !== 'null' && typeof(origin[prop]) == 'object') {
                //如果遍历出来的是object && 如果是数组，继续遍历，target传入[],
                target[prop] = (toStr.call(origin[prop]) == arrStr ? [] : {});
                deepClone(origin[prop], target[prop])
            } else {
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
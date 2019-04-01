function deepCopy(obj, hash = new WeakMap()) {
    if (hash.has(obj)) {
        console.log(hash);
        return hash.get(obj);
    }
    let cloneObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, cloneObj)
    for (let key in obj) {
        cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];
    }
    return cloneObj
}

function isObj(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}
var obj = {}
obj.obj = obj; //无限递归下去，爆栈了
console.log(deepCopy(obj))
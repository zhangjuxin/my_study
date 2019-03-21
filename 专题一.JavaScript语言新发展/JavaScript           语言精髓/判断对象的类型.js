/* 
判断一个值是什么类型
*/
var class2type = {};
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    // 一箭双雕
    if (obj == null) {
        return obj + "";
    }
    //如果obj是引用类型，那么进行Object.prototype.toString.call，如果是普通类型，那么直接使用typeof
    return typeof obj === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj;
}
/* 
简单的对象：通过{},或者new Object创建的,怎么判断是否是简单的对象呢
1.没有原型的对象
2.
*/
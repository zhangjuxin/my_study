function priceLt(x) {
    return function(item) {
        return item.price < x;
    };
}
var gems = [{
    name: 'Sunstone',
    price: 4
}, {
    name: 'Amethyst',
    price: 5
}, {
    name: 'Prehnite',
    price: 2
}, {
    name: 'Sugilite',
    price: 7
}, {
    name: 'Diopside',
    price: 3
}, {
    name: 'Feldspar',
    price: 13
}, {
    name: 'Dioptase',
    price: 2
}, {
    name: 'Sapphire',
    price: 20
}];
//  var chosen = _(gems).filter(priceLt(10)).take(3).value();
/* 
需求：在gems中找出三个price小于10的对象
分析：遍历gems数组，找出前三个符合条件的对象，找到后就停止遍历
*/
const arr = [];
for (let i = 0; i < gems.length; i++) {
    if (gems[i].price < 10) {
        if (arr.length === 3) {
            break; //停止循环
        }
        arr.push(gems[i]);
    }
}
console.log(arr, 'test');
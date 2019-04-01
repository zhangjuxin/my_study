const obj = {
    name: "zhang",
    age: 19,
    sex: "nan",
    play() {
        console.log('obj-play');
    }
}
const obj2 = {};
for (name in obj) {
    console.log(name);
    obj2[name] = obj[name];
}
obj2.car = "特斯拉";
obj2.play = function() {
    console.log(123);
}
console.log(obj2, obj == obj2, obj);
//{ name: 'zhang', age: 19, sex: 'nan', car: '特斯拉' } false { name: 'zhang', age: 19, sex: 'nan' }
//obj深拷贝成功
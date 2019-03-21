var yideng = Array(3);
yideng[0] = 2;
var result = yideng.map(function(elem) {
    console.log(elem); //2
    return '1';
})
console.log(result);
// [ '1', <2 empty items> ]
while (1) {
    switch ('yideng') {
        case "yideng":
            throw new Error('干啥');
            //禁止直接写一句break
    }
}
//请修改代码能够跳出死循环
//----//----//----//----//----
[1 < 2 < 3, 3 < 2 < 1]
[true, true]
2 == [
    [
        [2]
    ]
]; //true
var yidenga = Function.length; //1
yidengb = new Function().length; //0
console.log(yidenga === yidengb);
var yi = new Date("2018-08-20"),
    deng = new Date(2018, 08, 20);
console.log([yi.getDay() === deng.getDay(), yi.getMonth() === deng.getMonth()]);
//[false,false]
for (let i = (setTimeout(() => console.log("a->", i)), 0); setTimeout(() => console.log('b->', i)), i < 2; i++) {
    i++;
}
/* 
a-> 0
b-> 1
b-> 2
*/
[typeof null, null instanceof Object];
// ["object", false]
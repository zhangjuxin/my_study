const s = ["🍌", '🍎'];
const [first, seconed] = s;
console.log(first, seconed);

function test() {
    return {
        a: 1,
        b: 2
    }
}
/* 
a,b必须和test()返回的值对应
*/
const {
    a,
    b
} = test();
console.log(a, b);
// 模板字符串
const s1 = 'hello';
console.log(s1.includes('he')); //true
// 
const s2 = "😄😑😬";
//变成数组
console.log(Array.from(s2)); // ["😄", "😑", "😬"]
//合并数组
const s3 = [1, 2, 3, ...s2];
console.log(s3);
//对象
const obj = {
    [s3 + 1]: 1,
    s2,
    s1,
    test() {
        console.log(1);
    }
}
console.log(obj);
console.log();
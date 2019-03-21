// 一个字符串，请问其中最长的单词有多少个字符？
var str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
// 以空格分割单词
var splitBySpace = s => s.split(' ');
// 每个单词的长度
var getLength = w => w.length;
// 词的数组转换成长度的数组
var getLengthArr = arr => R.map(getLength, arr);
// 返回较大的数字
var getBiggerNumber = (a, b) => a > b ? a : b;
// 返回最大的一个数字
var findBiggestNumber = arr => R.reduce(getBiggerNumber, 0, arr);
var getLongestWordLength = R.pipe(splitBySpace, getLengthArr, findBiggestNumber);
console.log(getLongestWordLength(str));
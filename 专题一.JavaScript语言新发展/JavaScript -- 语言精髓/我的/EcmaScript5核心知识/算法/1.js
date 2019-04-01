/* 请把两个数组 
['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
和 ['A', 'B', 'C', 'D']，合并为 
['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']。 
*/

var arr1 = ['A2', 'A1', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
var arr2 = ['A', 'B', 'C', 'D'];

function change(arr1, arr2) {
    var arr = arr1.concat(arr2);
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i].slice(0, 1)]) {
            obj[arr[i].slice(0, 1)].push(arr[i]);
        } else {
            obj[arr[i].slice(0, 1)] = [arr[i]];
        }
    }
    for (let value in obj) {
        for (let i = 0; i < obj[value].length; i++) {
            for (let j = i + 1; j < obj[value].length; j++) {
                if (obj[value][i].slice(1) > obj[value][j].slice(1)) {
                    var old = obj[value][j];
                    obj[value][j] = obj[value][i];
                    obj[value][i] = old;
                }
            }
        }
    }
    var new_arr = [];
    for (let i in obj) {
        new_arr.push(obj[i]);
    }
    while (new_arr.some(item => Array.isArray(item))) {
        new_arr = [].concat(...new_arr);
    }
    return new_arr;
}
change(arr1, arr2);

// if (!obj[value][i].slice(1)) {
//     console.log(obj[value][i].slice(1), '🍉');
//     var old = obj[value][i];
//     obj[value][i] = obj[value][obj[value].length - 1];
//     obj[value][obj[value].length - 1] = old;
// }

var arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2', 'A3', 'B4'];
var arr2 = ['D', 'B', 'C', 'A']
var arr3 = arr2.map(item => `${item}N`)
var ret = [...arr1, ...arr3].sort().map(item => item.replace('N', ''))
console.log(ret)

const arr4 = [1, 3, 4, 5];
arr4.map(function(value) {
    return value++;
})
console.log(arr4, '🍉');
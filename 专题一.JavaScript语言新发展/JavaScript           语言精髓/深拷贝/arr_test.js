var arr = [10, 20, 30];
var arr2 = [];
for (let index = 0; index < arr.length; index++) {
    // const element = array[index];
    arr2[index] = arr[index];
}
console.log(arr2, arr == arr2);
//[ 10, 20, 30 ] false
//数组深拷贝成功
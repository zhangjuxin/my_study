/*
 * @Author: zhangJuxin
 * @LastEditors: zhangJuxin
 * @Description: file content
 * @Date: 2019-02-22 14:02:42
 * @LastEditTime: 2019-04-01 16:55:04
 */
var temp = 0;
start: for (var i = 0; i < 5; i++) {
    for (var m = 0; m < 5; m++) {
        if (m == 1) {
            break start;
        }
        temp++;
    }
}
console.log(temp); //1
//有start这个标签，并且在break时加上start，则弹窗是1，去掉start，则弹窗是5.
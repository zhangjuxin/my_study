var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
    var pusher = {
            value: "item" + i
        },
        tmp;
    if (i !== 2) {
        tmp = []
        pusher.children = tmp;
    }
    arr.push(pusher);
    //第一次循环把arr指向了tem，所以后面所有对arr的操作都是对tem的操作
    arr = tmp;
}
console.log(s[0]);
//  {
//     value: 'item0',
//     children: [{
//         value: 'item1',
//         children: [Array]
//     }]
// }
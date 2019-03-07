// // 点击确定按钮时，获取面值列表
// getFaceResult() {
//     this.getLocation(this.phoneNum)
//         .then(res => {
//             if (res.status === 200 && res.data.success) {
//                 let province = res.data.obj.province;
//                 let city = res.data.obj.city;

//                 this.getFaceList(province, city)
//                     .then(res => {
//                         if (res.status === 200 && res.data.success) {
//                             this.faceList = res.data.obj
//                         }
//                     })
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// // 点击确定按钮时，获取面值列表
// async getFaceResult() {
//     try {
//         let location = await this.getLocation(this.phoneNum);
//         if (location.data.success) {
//             let province = location.data.obj.province;
//             let city = location.data.obj.city;
//             let result = await this.getFaceList(province, city);
//             if (result.data.success) {
//                 this.faceList = result.data.obj;
//             }
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
let numS = new Set();
// false的时候停止循环
while (numS.size < 10) {
    numS.add(parseInt(10 + Math.random() * 90));
}
console.log([...numS].sort((a, b) => a - b));
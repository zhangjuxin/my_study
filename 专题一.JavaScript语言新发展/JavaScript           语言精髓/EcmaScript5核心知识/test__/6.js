const fucArr = [
    next => {
        setTimeout(() => {
            console.log(1);
            console.log(next);
            next()
        }, 1000)
    },
    next => {
        setTimeout(() => {
            console.log(2);
            next()
        }, 1000)
    },
    next => {
        setTimeout(() => {
            console.log(3);
            next()
        }, 1000)
    }
]
var run = arr => {}
// 实现一个run方法,使得run(fucArr)能顺序输出1、2、3.
var run = arr => {
    // 递归语句千万条，找到出口第一条，那咱们判断递归出口的条件就是等待队列为空
    if (arr.length === 0) return;
    // 好的，一句话执行过程写完了
    arr[0](() => {
        run(arr.slice(1));
    });
}
run(fucArr)
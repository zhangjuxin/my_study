// step1(function(value1) {
//     step2(value1, function(value2) {
//         step3(value2, function(value3) {
//             step4(value3, function(value4) {
//                 // Do something with value4
//             });
//         });
//     });
// });

function* longRunningTask(value1) {
    try {
        var value2 = yield step(value1);
        var value3 = yield step(value2);
        var value4 = yield step(value3);
        var value5 = yield step(value4);
        // Do something with value4
    } catch (e) {
        // Handle any error from step1 through step4
    }
}
scheduler(longRunningTask(initialValue));

function scheduler(task) {
    var taskObj = task.next(task.value);
    // 如果Generator函数未结束，就继续调用
    if (!taskObj.done) {
        task.value = taskObj.value
        scheduler(task);
    }
}

function centerFunctions() {
    var result = [];
    for (var i = 0; i < 10; i++) {
        result[i] = function(num) {
            return function() {
                return num;
            }
        }(i);
    }
    return result;
}
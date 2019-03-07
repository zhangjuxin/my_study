//现在把业务要求改一下，仍然是三个步骤，但每一个步骤都需要之前每个步骤的结果。
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}

function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1).then(time2 => {
        return step2(time1, time2).then(time3 => [time1, time2, time3]);
    }).then(times => {
        const [time1, time2, time3] = times;
        return step3(time1, time2, time3);
    }).then(result => {
        console.log(`result is ${result}`);
        console.timeEnd("doIt");
    });
}
doIt();
var p = new Promise(function(resolve, reject) {
    resolve(1);
}).then(data => {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve('hehe');
        }, 2000)
    }).then(data => '100');
}).then(data => {
    console.log(data, '123');
})
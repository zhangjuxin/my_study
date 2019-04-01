console.log(a);
console.log(typeof yideng(a));
var flag = true;
if (!flag) {
    var a = 1;
}
if (flag) {
    function yideng(a) {
        yideng = a;
        console.log("yideng1");
    }
} else {
    function yideng(a) {
        yideng = a;
        console.log("yideng2");
    }
}
///------------------
///相当于下面的内容
var flag;
var yideng;
var a;
console.log(a); //undefined
console.log(typeof yideng(a)); //报错  yideng is not a function
flag = true;
if (!flag) {
    a = 1;
}
if (flag) {
    yideng = function(a) {
        yideng = a;
        console.log('yideng1');
    }
} else {
    yideng = function(a) {
        yideng = a;
        console.log('yideng2');

    }
}

// bind(null)
//严格模式
var arr = [1.2, [3, [33]]];

function flatten(arr) {
    return arr.reduce((result, item) => {
        console.log('🌰', item, result);
        return result.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}
flatten(arr);
/* 
🌰 1.2  []
🌰 [ 3, [ 33 ] ]  [ 1.2 ]
🌰 3 []
🌰 [ 33 ] [ 3 ]
🌰 33 []
[ 1.2, 3, 33 ]
*/
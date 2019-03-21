function test(ary) {
    ary[0] = ary[2];
}

function yideng(a, b, c = 3) {
    c = 10;
    test(arguments);
    return a + b + c;
}
console.log(yideng(1, 1, 1)); //12
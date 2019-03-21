function sum(x, total) {
    if (x === 1) {
        return x + total;
    }
    return sum(x - 1, x + total);
}
console.log(sum(5, 0));

function sum2(x) {
    if (x === 1) {
        return 1;
    }
    return x + sum2(x - 1);
}
Object.assign()
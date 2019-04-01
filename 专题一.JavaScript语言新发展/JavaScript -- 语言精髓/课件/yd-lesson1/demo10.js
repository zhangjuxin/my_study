let a = 0;
let yideng = async () => {
    a = a + await 10; //Promise.resolve(10)
    console.log("xxx", a)
}
yideng();
console.log(++a);

// co(*)
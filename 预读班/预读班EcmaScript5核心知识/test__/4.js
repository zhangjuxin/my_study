function test(m) {
    m = {
        v: 5
    }
    //重写引用就变了
    m.v = 100;
}
var m = {
    k: 30
};
test(m);
console.log(m.v); //undefined
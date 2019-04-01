function yideng(a, b, c) {
    console.log(this); //Arguments
    console.log(this.length); //4
    console.log(this.callee.length); //1
}

function fn(d) {
    arguments[0](10, 20, 30, 40, 50);
    /* 
    arguments是对象，所以是arguments调用的yideng
    */
}
fn(yideng, 10, 20, 30);
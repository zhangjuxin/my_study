//实际的参数是5个  形参是3个
function yideng() {
    console.log(this.length);
    //call callee caller
    console.log(this.callee.length);
}

function fn(d) {
    //yideng->this->arguments
    //arguments -> fn
    //arguments实际的参数
    //this.callee = fn 形参 1
    arguments[0]();
}
//实际的参数4个 形参是1个
fn(yideng, 10, 20, 30);
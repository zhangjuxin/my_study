var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function f() {
        console.log(scope);
    }
    console.dir(f);
    setTimeout(() => {
        f();
    }, 5000);

}
console.log(checkscope());
//作用域链用于变量的查询

// var scope = "global scope";

// function checkscope() {
//     var scope = "local scope";

//     function f() {
//         return scope;
//     }
//     return f;
// }
// checkscope()();
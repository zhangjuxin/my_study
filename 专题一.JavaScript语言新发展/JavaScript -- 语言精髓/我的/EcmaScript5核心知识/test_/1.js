var yideng = {
    bar: function() {
        console.log(this);
        // [Arguments] { '0': [Function: bar] }
        return this.baz;
    },
    baz: 1
};
(function() {
    console.log(typeof arguments[0]());
})(yideng.bar);
//undefined
//---------------------------------------
//2.错误❌
function test() {
    console.log("out");
}
(function() {
    if (false) {
        function test() {
            console.log('in');
        }
    }
    // test();
})();
//my:in
//test is not a function
//3,❌
var x = [typeof x, typeof y][1];
//typeof x -->  'undefined' 是字符串的，所以。。。
console.log(typeof x);
//string
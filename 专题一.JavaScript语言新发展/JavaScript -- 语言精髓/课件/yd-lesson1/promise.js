//bind  深拷贝
function Promise(fn) {
    var callback;
    this.then = function(done) {
        callback = done;
    }

    function resolve() {
        setTimeout(function() {
            callback();
        }, 0)
    }
    fn(resolve);
}


new Promise(function(resolve, reject) {
    resolve(1);
}).then(function(data) {
    console.log(data)
})
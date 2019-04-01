this.a = 20;
var p = {
    a: 30,
    test: function() {
        function s() {
            console.log(this, this.a);
        }
        s();
    }
}
p.test(); //20
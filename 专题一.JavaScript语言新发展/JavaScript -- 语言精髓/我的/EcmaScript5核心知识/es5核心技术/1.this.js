this.a = 20;
var test = {
    a: 40,
    init: () => {
        console.log(this.a);

        function go() {
            this.a = 60;
            console.log(this.a);
        }
        go.prototype.a = 50;
        return go;
    }
}
var p = test.init(); //20
p(); //60
new(test.init())(); //20,60
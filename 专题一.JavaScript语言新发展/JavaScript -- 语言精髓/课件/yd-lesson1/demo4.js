function Yideng(name){
    this.name = name;
}
let YidengFactory  = function(name){
    let student1 = new Yideng(name);
    return function(){
        //console.log(student1);
    }
}
let p1 = new YidengFactory("laoyuan");
p1();
p1 = null;
function Yideng(name){
    this.name = name;
}
let student1 = new Yideng();
let student2 = new Yideng();
student1 = null;
setTimeout(function(){
    student2 = null;
},3000)
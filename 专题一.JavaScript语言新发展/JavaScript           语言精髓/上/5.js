function Person(uName) {
    this.skills = ['php', 'javascript'];
    this.userName = uName;
}
Person.prototype.showUserName = function() {
    return this.userName;
}

function Teacher(uName) {
    Person.call(this, uName);
}

function object(o) {
    var G = function() {};
    G.prototype = o;
    return new G();
}

function inheritPrototype(subObj, superObj) {
    var proObj = object(superObj.prototype); //复制父类superObj的原型对象
    proObj.constructor = subObj; //constructor指向子类构造函数
    subObj.prototype = proObj; //再把这个对象给子类的原型对象
}
inheritPrototype(Teacher, Person);
var oT1 = new Teacher('ghostwu');
oT1.skills.push('linux');
var oT2 = new Teacher('ghostwu');
console.log(oT2.skills); //php,javascript
console.log(oT2.showUserName()); //ghostwu
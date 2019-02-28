class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(func);
    }
    say2() {
        console.log();
    }
}
class english extends people {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
    play() {
        console.log('play');
    }
}
var eng1 = new english('a', 10, 'en');
console.log(eng1);
var peo1 = new people('z', 100);
console.log(peo1.play);
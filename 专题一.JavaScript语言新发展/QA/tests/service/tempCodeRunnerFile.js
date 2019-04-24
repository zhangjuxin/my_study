var obj = {
    name: "张举欣",
    age: 12,
    say() {
        console.log(`我是${this.name}`);
    }
}
obj.say();
let laoyuan = {
    age: 30
}
const validator = {
    set(target, key, value) {
        if (typeof value != "number" || Number.isNaN(value)) {
            throw new Error("年龄得是数字");
        }
    }
}
const proxy = new Proxy(laoyuan, validator);
proxy.age = "京程一灯";
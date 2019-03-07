// 函数声明
async function foo() {}

// 函数表达式
const foo = async function() {};

// 对象的方法
let obj = {
    async foo() {}
};
// obj.foo().then(...)

// Class 的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }

    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
}

const storage = new Storage();
// storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
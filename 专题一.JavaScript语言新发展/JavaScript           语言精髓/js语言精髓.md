# JS语言精髓

## typeof

```js
typeof null === 'object'; 
// 从一开始出现JavaScript就是这样的
//在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。
//对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"。（reference）
```


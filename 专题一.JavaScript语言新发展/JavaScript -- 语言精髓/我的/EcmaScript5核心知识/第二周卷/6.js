// - 7.请按照下方要求作答，并解释原理?请解释下babel编译后的async原理(15分)
let a = 0;
//async是微任务，后执行
let yideng = async () => {
    a = a + await 10;
    console.log(a); //10
}

yideng();
console.log(++a); //1   
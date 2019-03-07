// 、、https://www.cnblogs.com/SamWeb/p/8417940.html
var fetch = require('node-fetch');

async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    await new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(123);
            resolve(123);
        }, 3000)
    })
    // return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    return html;
}
getTitle('https://taobao.com').then((data) => {
    console.log(data);
})
// "ECMAScript 2017 Language Specification"
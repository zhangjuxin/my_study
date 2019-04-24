// async function q() {
//     var s = await fetch('./1.json')
//         .then(function(response) {
//             console.log(response, 'response', response.json());
//             return response.json();
//         })
//         .then(function(myJson) {
//             return myJson;
//         });
//     var s2 = await fetch(`./${s.name}.json`)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(myJson) {
//             return myJson;
//         });
//     console.log(s, s2);
// }
// q();

async function get1() {
    const response = await fetch('./1.json');
    const myJson = await response.json();
    return myJson;
}

async function get2(s) {
    const response = await fetch(`./${s.name}.json`);
    const myJson = await response.json();
    return myJson;
}
async function test() {
    let res1 = await get1().catch(function(err) {
        console.log(err);
    });;
    let res2 = await get2(res1).catch(function(err) {
        console.log(err);
    });;
    console.log(res1, res2);
}
test();
// promise改写
async function get3() {
    const response = await fetch('./1.json');
    return response.json();

}

async function get4(s) {
    const response = await fetch(`./${s.name}.json`);
    return response.json();
}

function pro() {
    get3().then((data) => get4(data).then((data) => {
        console.log(data);
    }))
}
pro();
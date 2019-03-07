new Promise((resolve, reject) => {
        console.log('Initial');

        resolve();
    })
    .then(() => {
        /* 
        抛出错误或者调用reject都会走catch
        */
        // reject();
        throw new Error('Something failed');

        console.log('Do this');
    })
    .catch(() => {
        console.log('Do that');
    })
    .then(() => {
        console.log('Do this whatever happened before');
    });

/* 
    Initial
    Do that
    Do this whatever happened before
*/
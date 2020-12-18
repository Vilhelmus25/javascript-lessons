// Make promise.

// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Én vagyok a jó királyfi');
//     }, 2000);
// });

// myPromise.then(
//     sentence => console.log(sentence)
// ).catch(
//     err => console.error(error)
// )

//egyszerűbben: 
const myPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Én vagyok a jó királyfi');
        }, 2000);
    });
};

/* const s = myPromise();
s.then(
    sentence => console.log(sentence)
)
 */

//  const s = await myPromise();        // ilyenkor lefagyna a program, mert addig nem lehetne mást csinálni
const inti = async () => {              // az async kulcsszóval egyszerűsítjük, ugyanis így a fv nem void lesz, hanem Promise!!!
    const s = await myPromise();        // await a resolve része, viszont itt stringet ad vissza, az await megvárja a Promise végét. Itt már jó, mert aszinkron függvényben érvényes az await
    const s2 = await myPromise();
    const s3 = await myPromise();
    console.log(s, s2, s3);
    console.timeEnd('ff');
};


inti();

console.time('ff');
console.log('The program is running');
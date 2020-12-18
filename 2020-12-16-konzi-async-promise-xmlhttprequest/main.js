// Generátorok

const names = ['Józsi', 'Piri', 'Pisti', 'Feri'];       // a tömbelemek szekvenciálisan helyezkednek el egymás után, ez az objektum iterálható és megszámlálható. Vagyis tudom melyik elem után melyik jön.
for (let name of names) {           // az értékeket járja be
    console.log(name);                      // az objektumra nem működik a foreach, mert nem tudja, milyen elv szerint menjen végig a kulcsokon és a normál ciklussal sem
}

// Range iterátor készítése (generátor fv)              (*   és     yield)
// Képes lesz arra, hogy létrehozzon egy iterálható objektumot (tömböt)
function* makeRangeIterator(start = 0, end = 100, step = 1) {           // alapértelmezett értékkel van a start         //   * azt jelenti, hogy az egy generátor függvény lesz, egy iterálható tömbjellegű objektummal
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount += 1;
        yield i;                                                        // a yieldnél áll meg a fv és itt a tömb értékeinél. Ez generálja le a tömb értékeit.
    }
    return iterationCount;                          // nem kötelező a return, de ajánlott, mert a yield megteszi a dolgát
}

/* const it = makeRangeIterator(10, 30, 2);
console.log('Az it hossza: ', it.length);           // undefined ha van length
console.log('Az it: ', it);
for (const num of it) {
    console.log(num);                               // a names tömb úgy viselkedik ,mint a range iterátor

} */

const user = {
    name: 'John Doe',
    email: 'jd@gmail.com',
    age: 45,
    address: 'Budapest'
};

function* getObjectValues(obj) {
    const keys = Object.keys(obj);
    keys.sort();
    for (const key of keys) {
        yield obj[key];
    }
}

const userValues = getObjectValues(user);           // a forEach nem megy rá
for (const v of userValues) {
    console.log(v);
}

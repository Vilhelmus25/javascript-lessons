'use strict';

const pi = Math.PI;             // ez a változó nincs exportálva, mégis a sum eléri
/*export */const sumValues = (x, y) => x + y + pi;       // az export kulcsszót eléírva tudom majd minde a két függvényt más fájlokba importálni
/*export */const subtractValues = (x, y) => x - y;  // az export valójában egy obejvtre mutat, aminek egy sumValues és egy subtractValues eleme van

// ez is egy módja (talán jobb), de akkor értelemszerűen a fenti export nem kell!!!
export {
    // sumValues,
    //  subtractValues
    sumValues as sum,
    subtractValues as sub,
}
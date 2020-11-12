'use strict';

const intArr1 = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const intArr2 = [8567, 234, 61, 342, 646, 12, 32, 457, 8683, 113,];
const descartesArr1 = [234, 53453, 23, 636];
const descartesArr2 = [8567, 234, 61, 342];
const mixArr = [234, 'asddsa', '23', 636, 'false', 6434, 23, 'abc', 23, 'bbb'];
const intArr1Length = intArr1.length;
const intArr2Length = intArr2.length;
const descartesArr1Length = descartesArr2.length;

let index = 0;
let segmentArray = [];
let unioArray = [];
let differenceArray = [];
let descartesArray = [];
let str = "";

function segmentFunction(arr1, arr2, n) {

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {

            if (arr1[i] === arr2[j]) {
                segmentArray.push(arr1[i]);
            }

        }

    }
}
function unioFunction(arr1, arr2, n) {

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {

            if (arr1[i] !== arr2[j]) {
                if (unioArray.includes(arr1[i])) {

                } else {
                    unioArray.push(arr1[i]);
                }
                if (unioArray.includes(arr2[i])) {

                } else {
                    unioArray.push(arr2[i]);
                }

            }
            if (arr1[i] === arr2[j]) {
                if (unioArray.includes(arr1[i]) || unioArray.includes(arr2[i])) {

                }
                else {
                    unioArray.push(arr1[i]);
                }
            }

        }

    }
}

function differenceFunction(arr1, arr2, n) {

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {

            if (arr1[i] !== arr2[j]) {                  // minden ami nem metszet
                if (differenceArray.includes(arr1[i])) {        // ha már korábban volt, akkor ne

                } else {
                    differenceArray.push(arr1[i]);      // az Összes A-t
                }
            }

            //  Még nem kerek, az utolsó elemet beteszi az egyik tömbből

        }
        if (differenceArray.includes(arr1[i])) {
            differenceArray.splice(i, 1);               // minden olyan A halmazbeli elemet ami metszete a B-vel is, azt törölje
        }

    }
}


function descartesFunction(arr1, arr2, n) {

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {

            descartesArray.push('(' + arr1[i] + ', ' + arr2[j] + ')');            // minden elemet arr1-ből összefésülök az arr2-ből és kiteszem e megfelelő karaktereket, hogy rendezve legyenek

        }

    }
    str = "";
    for (let i = 0; i < descartesArray.length; i++) {       // ezt lestem
        str = str + "[" + descartesArray[i] + "]<br>";

    }

}



segmentFunction(intArr1, intArr2, intArr1Length);
unioFunction(intArr1, intArr2, intArr1Length);
differenceFunction(intArr1, intArr2, intArr1Length);
descartesFunction(descartesArr1, descartesArr2, descartesArr1Length);


console.log('segmentArray: ');
console.log(segmentArray);
console.log('unioArray: ');
console.log(unioArray);
console.log('differenceArray: ');
console.log(differenceArray);
console.log('descartesArray: ');
console.log(descartesArray);
console.log('---------crack---------');
//console.log(tempArray);                 // ez kiírja a nem szám elemeket

// console.log(correctedBubbleSort([123, 321, 423, 124], 4));        // ezt is megkaphatja
'use strict';

const intArr = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const mixArr = [234, 'asddsa', '23', 636, 'false', 6434, 23, 'abc', 23, 'bbb'];
const intArrLength = intArr.length;
const mixArrLength = mixArr.length;

let index = 0;
let numberArray = [];
let stringArray = [];
let mergedArray = [];
let numberTest = false;
let counter = 0;

function numberStringSeparator(arr, n) {

    for (let i = 0; i < n; i += 1) {
        if (typeof arr[i] === 'string') {
            stringArray.push(arr[i]);
        }
        if (typeof arr[i] === 'number') {
            numberArray.push(arr[i]);
        }

    }

}

function numberStringSeparatorMerge(stringArray, numberArray, n) {
    let j = 0;

    for (let i = 0; i < n; i += 2) {
        mergedArray[i] = numberArray[j];
        mergedArray[i + 1] = stringArray[j];
        j += 1;
        //console.log('hopp');
    }

    return mergedArray;
}


numberStringSeparator(mixArr, mixArrLength, mixArrLength);                  // előbb különválasztjuk a számokat a és a szövegeket, betesszük őket 1-1 tömbbe
console.log(numberStringSeparatorMerge(stringArray, numberArray, mixArrLength));        // itt összefésüljük őket, 1 szám- 1 szöveg
console.log('---------crack---------');
//console.log(tempArray);                 // ez kiírja a nem szám elemeket

// console.log(correctedBubbleSort([123, 321, 423, 124], 4));        // ezt is megkaphatja
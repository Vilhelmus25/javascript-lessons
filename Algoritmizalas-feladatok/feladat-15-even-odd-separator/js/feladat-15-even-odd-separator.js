'use strict';

const intArr = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const mixArr = [234, 'asddsa', '23', 636, 'false', 6434, 23, 'abc', 23, 'bbb'];
const intArrLength = intArr.length;
const mixArrLength = mixArr.length;

let index = 0;
let evenArray = [];
let oddArray = [];


function evenOddSeparator(arr, n) {

    for (let i = 0; i < n; i += 1) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
        if (arr[i] % 2 === 1) {
            oddArray.push(arr[i]);
        }

    }
    return evenArray, oddArray;
}

evenOddSeparator(intArr, mixArrLength)
console.log('evenArray: ');
console.log(evenArray);
console.log('oddArray: ');
console.log(oddArray);
console.log('---------crack---------');
//console.log(tempArray);                 // ez kiírja a nem szám elemeket

// console.log(correctedBubbleSort([123, 321, 423, 124], 4));        // ezt is megkaphatja
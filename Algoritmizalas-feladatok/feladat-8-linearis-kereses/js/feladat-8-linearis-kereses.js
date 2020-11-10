'use strict';

const intArr = [234, 53453, 123, 636, 32, 6434, 75, 545, 23, 646];
let index = 0;
let lookForElement = 23;       // most ezt kerressük a feladat szerint

function getElementByLinearSearch(arr, element) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == element) {
            index = i;
        }

    }
    console.log(index);
}

getElementByLinearSearch(intArr, lookForElement);
console.log('---------crack---------');
getElementByLinearSearch([123, 321, 423, 124], 423);        // ezt is megkaphatja
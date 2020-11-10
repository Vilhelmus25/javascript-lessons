'use strict';

const intArr = [234, 53453, 123, 636, 32, 6434, 75, 545, 23, 646];
const intArrLength = intArr.length;
let index = 0;
let lookForElement = 23;       // most ezt kerressük a feladat szerint
let nextMin = 1000000000;
let tempArray = [];

function makeArraysToSorted(arr) {          // sorbarendezzük az Array-t

    for (let j = 0; j < intArrLength; j++) {

        for (let i = 0; i < arr.length; i++) {      // aktuális min keresés
            if (nextMin > arr[i]) {
                nextMin = arr[i];
                index = i;

            }
            // console.log(arr[i]);
        }
        //console.log("---");
        arr.splice(index, 1);       // kitöröljük a talált minimumot .splice(where, how many)

        tempArray[j] = nextMin;         // lementjük
        nextMin = 1000000;                  // hogy ne ragadjon be a legkisebbnél
        console.log(tempArray[j]);
    }
}

makeArraysToSorted(intArr);
console.log('---------crack---------');
makeArraysToSorted([123, 321, 423, 124]);        // ezt is megkaphatja


/* a rendezés után teljesen előlről, kivéve a tempArray */


let sizeOfArray = tempArray.length - 1;
lookForElement = 123;       // most ezt kerressük a feladat szerint
let foundElement = false
let startIndex = 0;
let endIndex = sizeOfArray;
let midIndex = 0;

function binarySearch(arr, target) {

    while (startIndex <= endIndex) {

        midIndex = startIndex + (endIndex - startIndex) / 2;

        if (target === arr[midIndex]) {
            return console.log('The element is at the: ' + midIndex + 'th position.');
        }
        if (target > arr[midIndex]) {
            console.log("Searching the right side of the array...");
            startIndex = midIndex + 1;
        }
        if (target < arr[midIndex]) {
            console.log("Searching the left side of the array...");
            endIndex = midIndex - 1;
        }
        else {
            console.log("Not found anything look!");
        }

    }


}
binarySearch(tempArray, lookForElement);
console.log('---------crack---------');
    //binarySearch([123, 321, 423, 124]);        // ezt is megkaphatja
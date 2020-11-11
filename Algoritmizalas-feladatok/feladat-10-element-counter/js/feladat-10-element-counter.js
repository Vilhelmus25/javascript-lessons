'use strict';

const intArr = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const mixArr = [234, 53453, '23', 636, false, 6434, 23, 'abc', 23, 646];
const intArrLength = intArr.length;
let index = 0;
let lookForElement = 23;       // most ezt kerressük a feladat szerint
let nextMin = 1000000000;
let tempArray = [];
/*
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
*/

/* a rendezés után teljesen előlről, kivéve a tempArray */

let numberTest = false;
let counter = 0;

function arrayCertainElementCounter(arr, target) {

    // for (let i = 0; i < arr.length; i += 1) {      // értéktípus vizsgálat

    //     if (typeof arr[i] === "number") {
    //         counter += 1;
    //         //console.log(typeof arr[i] === "number");
    //     }

    //     if (counter === arr.length) {
    //         numberTest = true;

    //     }
    //     else {
    //         numberTest = false;
    //     }

    // }


    for (let i = 0; i < arr.length; i += 1) {

        if (typeof arr[i] === "number") {
            if (arr[i] === target) {
                counter += 1;
            }

        }

    }
    console.log(counter);
    counter = 0;        // töröljük a tartalmát
}

arrayCertainElementCounter(intArr, lookForElement);
console.log('---------crack---------');
arrayCertainElementCounter(mixArr, lookForElement);
    //binarySearch([123, 321, 423, 124]);        // ezt is megkaphatja
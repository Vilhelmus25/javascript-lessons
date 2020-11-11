'use strict';

const intArr = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const mixArr = [234, 53453, '23', 636, false, 6434, 23, 'abc', 23, 646];
const intArrLength = intArr.length;
const mixArrLength = mixArr.length;

let index = 0;
let lookForElement = 23;       // most ezt kerressük a feladat szerint
let nextMin = 1000000000;
let tempArray = [];
let numberTest = false;
let counter = 0;

function correctedBubbleSort(arr, n) {

    let i = 0;
    let j = 0;
    let temp = 0;
    let swapped = false;        // ettől lesz optimized, egy feltétel vizsgálat miatt nem fog akkor is végig akkor is amikor már rendezve van
    for (let i = 0; i < n - 1; i++) {       // mert párosával nézi az elemeket azért van n-1

        for (let j = 0; j < n - 1; j++) {        // a j+1 miatt, azért van n-1
            if (typeof arr[j] === "number" && typeof arr[j + 1] === "number") {         // ha a két vizsgált elem az szám típusú
                if (arr[j] > arr[j + 1]) {
                    //swap arr[j]-t arr[j+1]-el
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            else if (typeof arr[j] !== "number" || typeof arr[j + 1] !== "number") {        // ha valamelyik vizsgált elem nem szám
                if (typeof arr[j] !== "number") {                                           // ha az első nem szám
                    tempArray.push(arr[j]);         // tegyük be a nem szám elemet egy tempArray-be
                    arr.splice(j, 1);               // vegyük ki a tömbből
                    n -= 1;                         // csökkentsük a hosszCountert
                }
                if (typeof arr[j + 1] !== "number") {                                       // ha a második nem szám
                    tempArray.push(arr[j + 1]);
                    arr.splice(j + 1, 1);
                    n -= 1;
                }
            }
        }

        // ha egyszer sem volt csere a belső loop-ban akkor break
        if (swapped === false) {
            break;
        }

    }

    return arr;
}

console.log(correctedBubbleSort(mixArr, mixArrLength));
console.log('---------crack---------');
console.log(tempArray);                 // ez kiírja a nem szám elemeket

// console.log(correctedBubbleSort([123, 321, 423, 124], 4));        // ezt is megkaphatja
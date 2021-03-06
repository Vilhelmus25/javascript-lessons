'use strict';

const intArr = [234, 53453, 23, 636, 32, 6434, 23, 545, 23, 646];
const mixArr = [234, 53453, '23', 636, false, 6434, 23, 'abc', 23, 646];
const intArrLength = intArr.length;

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
            if (arr[j] > arr[j + 1]) {
                //swap arr[j]-t arr[j+1]-el
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }

        }

        // ha egyszer sem volt csere a belső loop-ban akkor break
        if (swapped === false) {
            break;
        }

    }

    return arr;
}

correctedBubbleSort(intArr, intArrLength);
console.log('---------crack---------');
console.log(intArr);

console.log(correctedBubbleSort([123, 321, 423, 124], 4));        // ezt is megkaphatja
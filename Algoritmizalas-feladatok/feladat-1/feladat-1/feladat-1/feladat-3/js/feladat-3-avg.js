const arrayGood = [86, 1231, 6];
const arrayBad = [622345, 86, 'abc', 6, 312346, 7, '45', false, 100];

function getIntAvgFromAnArray(arr) {

    let avg = 0;
    let numberTest = false;
    let counter = 0;
    let sumOfElements = 0;

    for (let i = 0; i < arr.length; i += 1) {      // értéktípus vizsgálat

        if (typeof arr[i] === "number") {
            counter += 1;
            //console.log(typeof arr[i] === "number");
        }

        if (counter === arr.length) {
            numberTest = true;

        }
        else {
            numberTest = false;
        }

    }

    console.log(numberTest);
    if (numberTest == true) {
        for (let i = 0; i < arr.length; i += 1) {

            sumOfElements = sumOfElements + arr[i];

            if (counter === i + 1) {
                avg = sumOfElements / counter;

            }

        }
        console.log(avg);
    }

}
getIntAvgFromAnArray(arrayGood);
getIntAvgFromAnArray(arrayBad);

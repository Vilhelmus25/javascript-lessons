const intArr = [234, 53453, 123, 636, 32, 6434, 75, 545, 3, 646];

function getMaxElementFromAnArray(arr) {     // bármilyen tömböt meg tudok adni lehet arr is, vagy intArr, vagy lufi. Így más tömbre is meg tudom hívni így, és ez a function lényege, hogy újrahasználható

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
        }

    }

    console.log(max);
}

getMaxElementFromAnArray(intArr);
getMaxElementFromAnArray([123, 321, 423, 124]);        // ezt is megkaphatja
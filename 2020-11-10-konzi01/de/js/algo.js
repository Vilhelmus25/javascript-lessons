const intArr = [234, 53453, 123, 636, 32, 6434, 75, 545, 3, 646];

function getMinElementFromAnArray(arr) {     // bármilyen tömböt meg tudok adni lehet arr is, vagy intArr, vagy lufi. Így más tömbre is meg tudom hívni így, és ez a function lényege, hogy újrahasználható

    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
        }

    }

    console.log(min);
}

getMinElementFromAnArray(intArr);
getMinElementFromAnArray([123, 321, 423, 124]);        // ezt is megkaphatja
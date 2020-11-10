'use strict';

const intArr = [234, 53453, 123, 636, 32, 6434, 75, 545, 3, 646];
let max = 0;
let thirdMax = [0, 0, 0];
function getThirdMaxFromAnArray(arr) {     // bármilyen tömböt meg tudok adni lehet arr is, vagy intArr, vagy lufi. Így más tömbre is meg tudom hívni így, és ez a function lényege, hogy újrahasználható

    for (let i = 0; i < 3; i++) {           // 3-ig mert a 3. legnagyobb kell, 3-szor nézzük az ellenőrzést

        for (let j = 0; j < arr.length; j++) {

            if (max < arr[j]) {
                max = arr[j];
                intArr[j] = 0;          // ez az aktuális max-ot 0-ára állítja, hogy ne újra ezt tegye bele
            }
        }

        thirdMax[i] = max;  // betesszük az aktuális max-ot
        max = 0;    // a maxot 0-ára állítjuk
    }

    console.log(thirdMax[2]);
}

getThirdMaxFromAnArray(intArr);
console.log('---------crack---------');
getThirdMaxFromAnArray([123, 321, 423, 124]);        // ezt is megkaphatja
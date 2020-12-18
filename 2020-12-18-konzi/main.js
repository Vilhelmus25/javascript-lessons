const url = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-20.epl-stats.json';
fetch(url).then(response => response.json()).then(data => console.log(data));             // fetch az egy kérés az url címtől.  Az első then akkor, ha van válasz. A response.json() a nyers adat, mindenestül.   A .then meg már a data

let counter = 0;
const si = setInterval(() => {
    counter++;
    console.log(counter);
}, 5);                                              // 5 ms-enként írunk ki egy számlálót

fetch(url).then(resp => resp.json()).then(data => {         // fetchnél alapértelmezett a 'get' kérés, de megadható
    console.log(data);
    clearInterval(si);              // számláló leállítása
})


//XMLHttpRequest-vel

const url = 'https://raw.githubusercontent.com/jokecamp/FootballData/master/EPL%202015%20-%202016/2015-10-20.epl-stats.json';
//fetch(url).then(response => response.json()).then(data => console.log(data));             // fetch az egy kérés az url címtől.  Az első then akkor, ha van válasz. A response.json() a nyers adat, mindenestül.   A .then meg már a data
let counter = 0;
const si = setInterval(() => {
    counter++;
    console.log(counter);
}, 5);                                              // 5 ms-enként írunk ki egy számlálót

const xhr = new XMLHttpRequest;     // csak egyszer lehet használni, mindig egy új kérésére van szükség, ha újat szeretnék, a meglévőt nem lehet használni erre.
xhr.open('GET', url)            // mit szeretnék tenni, nyitok egy folyamatot.  'GET'--lekérés az utl-ről
xhr.onload = (ev) => {          // az onload olyan mint az onclick, egy eseménykezelés          // xhr.addEventListener('load').        Így is lehet !!!
    console.log(ev);           // egy eseményt kapok töltésre, amit kiírok most
    clearInterval(si);
};
xhr.send();         // ha be van állítva, akkor küldés          --még talán gyorsabb is



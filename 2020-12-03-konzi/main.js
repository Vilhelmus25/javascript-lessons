
// Pontos dátum visszaadása.

// Tudok olyat, hogy:
// const getCurrentTime = (starttime) => {
//     const currentDate = starttime ? new Date(starttime) : new Date();
// }
const getCurrentTime = () => {
    // 1. Létrehozok egy dátum típusú objektumot.
    const currentDate = new Date();

    // 2. Kiolvasom a szükséges részeket a dátum objektumból.
    const year = currentDate.getFullYear();
    const month = padNumbers(currentDate.getMonth() + 1);
    //console.log(month);     // 11  mert tömbben van és 0-tól indul
    const day = padNumbers(currentDate.getDate());      // a getDay az a hétnek a napja
    const hours = padNumbers(currentDate.getHours());
    const minutes = padNumbers(currentDate.getMinutes());
    const seconds = padNumbers(currentDate.getSeconds());

    // Visszaadom a formázott időpontot.
    return `${[year, month, day].join('-')} ${[hours, minutes, seconds].join(':')}`;
};


// Tíznél kisebb számok kiegészítése 0-karakterrel
const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
}

// Meghívom a getCurrentTime függvényt, másodpercenként.
setInterval(() => {

    const time = getCurrentTime();
    console.log(time);

    const clockFace = document.querySelector('.clock-face');

    clockFace.textContent = time;
}, 1000);

// Stopperóra
let stopperTime = 0;
setInterval(() => {
    stopperTime += 1;
    let stopperTimeSeconds = padNumbers(stopperTime % 60);
    let stopperTimeMinutes = padNumbers(Math.floor(stopperTime / 60));          // a floor lefelé kerekít (floor = padló)
    const time = `${stopperTimeMinutes}:${stopperTimeSeconds}`;                 // a másik a Math.ceil()        (ceil mennyezet) fölfelé kerekít
    const stopperFace = document.querySelector('.stopper-face');
    stopperFace.textContent = time;
}, 1000);


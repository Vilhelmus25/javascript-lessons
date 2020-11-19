(function clickTxtHandler() {
    const element = document.querySelector('.txt');
    element.addEventListener('click', () => {            // az esemény az első, a második egy fv, ami le fog futni, a paramétereknél.
        //element.innerHTML = 'Clicked';      // nem a legjobb, mert ha usertől bekért adat van, akkor nem jó
        element.textContent = 'Clicked';        // ez jó, ezt használjuk
    })

})();           //IFEE (.....)()

(function clickBtnHandler() {
    const buttons = document.querySelectorAll('.btn');      // querySelectorAll, All mert 3 gombom van      a buttons egy NodeList-et fog tartalmazni!!!!!
    // console.log(buttons);       // különféle node-ok vannak; A NodeList nem egy tömb, hasonlít rá, de nincsenek olyan műveletei. Element típusú objektum, a HTML elemek típusai ilyenek.
    // const buttonsArray = Array.from(buttons); // ez a kapott iterálható objektumból tömböt készít!!! Ezután tömb lesz, ez fontos!!
    // console.log(buttonsArray);      // a tartalmuk ugyanaz lesz, de a tulajdonságaik és kezelhetőségük más.
    for (let i = 0; i < buttons.length; i += 1) {           // let-tel jó, varral nem, mert akkor kívülről is elérhető az i. Const.tal sem megy, a +1 értékváltoztatás nem fog menni.
        buttons[i].addEventListener('click', (event) => {           // kell az event-hez a kiírásnál
            console.log(event.target);          // kiírja magát a gombot, ahol az esemény történt.    event.valami nagyon hasznos, mindent elérek vele!!!
            console.log('Clicked button', i);
        })
    }
})()

    (function bubbling() {
        // const first = document.querySelector('.first');
        // const second = document.querySelector('.second');
        // const third = document.querySelector('.third');         // ez nem jó, főleg ha több van, nem szerencsés

        const divs = document.querySelector('.first , .second, .third');        // egybe vonhatóak, mert ezek css szelektorok, vesszővel sorolok föl
        // console.log(divs);
        for (let i = 0; i < divs.length; i++) {
            divs[i] = addEventListener('click', (event) => {
                event.stopPropagation();        // ez kikapcsolja a divekre az eseményfigyelést, nem fog felbubblingolni, csak a kiválasztott fog lefutni.
                console.log(event.target);              // itt 3-szor fogja kiírni a kiválasztott elemet
                console.log(event.currentTarget);       // nem jó, mert mindhármat kiírja, azért ez a bubbling működése, végig fog futni felfelé az összes szülőn, ahol van eseményfigyelő és ahol van, az is lefut
            }, true)        // ezt is hozzáírhatjuk az addEventListenerhez, az alapérték a false, egy boolean a visszatérési értéke, nagyon ritkán használjuk

            // Captureing, Bubbling, Targeting Phrase   Utánanézni!!!
            // van ahol nincs bubbling, pl: focus, blur

        }
    })();




const logCurrentTarget = (event) => {       // így is lehet, előre definiáljuk és máshonnan is elérhető így
    console.log(event.currentTarget);
}

(function bubbling() {
    const divs = document.querySelector('.first , .second, .third');
    const events = ['click', 'mouseover'];              // így lehet több eseményt egyszerre beállítani

    for (let i = 0; i < divs.length; i += 1) {
        for (let j = 0; j < events.length; j += 1) {        // bejárjuk az events tömböt
            divs[i].addEventListener(events[j], logCurrentTarget);
        }
    }
})();
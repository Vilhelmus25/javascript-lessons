'use strict';

let buttons = document.querySelectorAll('button');
let handleClick;

handleClick = () => {               // arrow functionnel
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', function () {          // kattintásra az adott gomb szövegét kiírja
            console.log(buttons[i].textContent);        // a gomb szövegtartalmát írja ki
        })
    }
}
handleClick();

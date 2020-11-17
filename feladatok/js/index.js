'use strict';

function btnSelector() {
    let selected = [];
    for (let i = 0; i < 3; i += 1) {

        selected = document.querySelectorAll('.button');
    }

    return selected.values;
}

console.log(btnSelector());
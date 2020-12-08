'use strict';

//  3.Feladat:  
//  Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
//  Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
//  Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.

const userHandler = {

    getList() {
        return new Promise((res, rej) => {
            if (localStorage.users) {
                res(JSON.parse(localStorage.users));
            } else {
                fetch('http://localhost:3000/users')
                    .then(response => res(response.json()));
            }
        });
    },
    showList(parent) {
        parent = document.querySelector(parent);
        this.getList().then(
            list => {
                this.generateList(parent, list);
                localStorage.users = JSON.stringify(list);
            },
            err => console.error(err)
        );
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;

            parent.appendChild(p);
        });
    }
}
console.log("object");
userHandler.showList('.user-list');

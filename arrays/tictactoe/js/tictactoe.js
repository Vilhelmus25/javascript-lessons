// maga a mátrix, egyelőre csak egy üres tömb
const matrix = [];
// sorok és oszlopok száma, hátha nem négyzetes
const rows = 3;
const cols = 3;
// lépések száma
let stepCount = 0;
// az aktuális jel
let mark = 'X'

// csak feltöltöm a mátrixot (valójában opcionális lépés is lehet)
const initState = () => {
    // ehelyett a fill metódussal szebb lenne
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < cols; j += 1) {
            matrix[i][j] = null;
        }
    }
}

// a mátrix egy elemének értéket adok, az adott elem data attribútumait 
// felhasználva nyerem ki az értéket
const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

// kattintáskor mi történjen, érdemes lenne több függvényre bontani
const handleClick = (event) => {
    stepCount += 1;
    event.target.removeEventListener('click', handleClick);
    event.target.textContent = mark;
    mark = mark === 'X' ? 'O' : 'X';
    changeMatrixValue(event.target);
    checkWinner();
}

// minden elemhez hozzáadom az eseményfigyelőt
const addListener = () => {
    document.querySelectorAll('.tictactoe__cell').forEach(element => {
        element.addEventListener('click', handleClick)
    });
}

// ha van győztes minden elemről eltávolítom az eseményfigyelőt
const removeListener = () => {
    document.querySelectorAll('.tictactoe__cell').forEach(element => {
        element.removeListener('click', handleClick)
    });
}

// Megnézem hogy van e olyan sor, ahol minden elem ugyanaz
const checkRowValues = () => {
    const values = matrix.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    return values.indexOf(true) !== -1 ? true : false;
}

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkColumnValues = () => {

    let win = false;
    let greatestMatch = 0;
    let j = 0;
    for (let i = 0; i < rows; i += 1) {
        if (matrix[j][i] === 'X') {
            for (let j = 0; j < cols; j += 1) {
                if (matrix[j][i] === 'X') {
                    greatestMatch += 1;
                }
                else {
                    greatestMatch = 0;
                }
            }
        } else {
            j = 0
        }

    }

    if (greatestMatch == cols) {
        win = true;
        greatestMatch = 0;
    } else {
        win = false;
        greatestMatch = 0;
    }

    return win;

    // Szebb lenne funkcionális programozással !!!!!
    // const values = matrix.map(row =>
    //     row.every((value) => value === 'X') ||
    //     row.every((value) => value === 'O'))
    // return values.indexOf(true) !== -1 ? true : false;
}
// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkDiagonalValues = () => {
    let win = false;
    let greatestMatch = 0;
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j += 1) {
            if (matrix[j][i] === 'X' || 'O') {
                greatestMatch += 1;
                i += 1;
            }
            else {
                greatestMatch = 0;
            }
        }
    }

    if (greatestMatch == cols) {
        win = true;
    } else {
        win = false;
    }

    return win;
}


// TODO: Meg kell írnod, nincs befejezve
const checkWinner = () => {
    // Akár a checkRowValues, checkColumnValues, checkDiagonalValues true, akkor van győztes
    // Csak azért van itt a log hogy lássátok hogy true akkor lesz ha van olyan sor ahol minden elem ugyanaz
    // console.log(checkRowValues());
    console.log(checkColumnValues());
}

initState();
addListener();
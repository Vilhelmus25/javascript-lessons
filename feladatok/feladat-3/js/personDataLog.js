'use strict';
let personDataLog;

personDataLog = (obj) => {
    if (obj['firstName'] === undefined) {
        obj['firstName'] = 'John';
    }
    if (obj['lastName'] === undefined) {
        obj['lastName'] = 'Doe';
    }
    if (obj['age'] === undefined) {
        obj['age'] = 33;
    }
    return obj;
}

const person = {
    //firstName: 'Jane',            // ilyenkor ezt a végére rakja a John-t
    lastName: 'Wallace',
    age: 30,
}
console.log(personDataLog(person));
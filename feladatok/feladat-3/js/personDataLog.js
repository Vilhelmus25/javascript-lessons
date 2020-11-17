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
    firstName: 'William',            // kommenteléssel tesztelhető
    lastName: 'Wallace',
    age: 30,
}
const introduction = personDataLog(person);
console.log("My name is " + introduction.firstName + ', ' + introduction.lastName + ". I'm " + introduction.age + ' years old.');
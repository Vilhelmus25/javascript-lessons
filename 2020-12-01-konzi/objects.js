const person = {            // objektum literál a {}
    firstName: 'John',      // tulajdonság a firstName
    lastName: 'Doe',
    age: 30,
    logName: function () {     // Objektum metódus, egy olyan property, ami fv-t tartalmaz, metódus a neve
        console.log(`I'm ${this.firstName} ${this.lastName}.`);     // objektumon belül this, nagyon fontos, és csak metódusban működik jól, propertynél ne!
    }

}


console.log(person.firstName);      // a . operátorral érem el az object tulajdonságait
console.log(person['firstName']);   // ez is jó, de nem használjuk, meghagyjuk a tömböknek

// Modify
person.firstName = 'Jane';
console.log(person.firstName);      // Jane

// Add
person.hobbies = ['reading', 'walking'];
console.log(person);

// Delete
delete person.age;
console.log(person);

// Az összetartozó dolgokat objektumokba kell rakni a jövőben

person.logName();       // this nem más, mint az a rész ami a person...

const user = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies =['reading', 'learning', 'running'],    // ha azt akarom, hogy nem akarom hozzáférjenek a hobbies tömbhöz, akkor metódussal kérdezem le és így csinálom meg
    getHobby: function (index) {            //  OBJECTNÉL AZ ARROW FUNCTION NEM MŰKÖDIK!
        //return `${this.hobbies[index][0].toLocaleUpperCase()}${this.hobbies[index].slice(1)}`;          // Itt már lehet arrowfunction

        // const hobby = this.hobbies[index];
        // return `${hobby[0].toLocaleUpperCase()}${hobby.slice(1)}`;      // így szebb


        const hobby = this.hobbies[index];
        return `${hobby[0].toLocaleUpperCase()}${hobby.slice(1)}`;      // így szebb
    }


}

console.log(user.hobbies[0]);
console.log(user.getHobby(0));
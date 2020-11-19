const person = {
    // 0: 'John',
    // 1: 'Doe'            // lehet így is, hogy számokkal adom meg a propertyket mint ha tömbök lennének, de legyen rendes property name. Mert így person.0, person.1 -ként kell rá hivatkozni.

    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'learning', 'walking'],
    sayHi: function () {                        // lehet anonim fv.
        console.log(this.firstName + ' ' + this.lastName + ' says Hi!');        // a this itt a person
    },
    speak(message) {            // így is lehet, még rövidebb  (nincs ':' és 'function')
        console.log(this.firstName + ' ' + this.lastName + ' says ' + message + '!');
    },
    // speak(message = 'hi') {            // így is lehet, még rövidebb  (nincs ':' és 'function')          // lehet alapértelmezett értéket adni a metódusnak
    //     console.log(this.firstName + ' ' + this.lastName + ' says ' + message + '!');                        
    // }
    // kulcs-érték párokat tárolunk le az objektumoknál

};


console.log(person.firstName);
//console.log(person['lastName']);          // mindkét lekérdezés helyes ; ennél mintha string lenne, de ezt nem használjuk
console.log(person.age);

person.age = 33;
console.log(person.age);
person.sayHi();
person.firstName = 'Jane';
person.sayHi();

person.speak('Hello');
console.log(person.hobbies[0]);


const algebra = {
    // arrays: [                   // mátrix 2D-s tömb
    //     [
    //         1, 2, 3, 4, 5, 6
    //     ],
    //     [
    //         4, 5, 6, 7, 8
    //     ]
    // ],
    init(arr1, arr2) {          // másik megoldás 2D-s mátrixra
        this.arr1 = arr1;
        this.arr2 = arr2;
    },
    unio() {
        return
    },
    intersection() {
        return
    },
    substraction() {
        return
    },
    descartes() {
        return
    }
}

// console.log(algebra.arrays[0][0]);      // így érjük el. Akárhány dimenziós tömb lehet így  Ha be kell járni, akkor annyi egymásba ágyazott for ciklus
algebra.init([1, 2, 3, 4], [4, 5, 6, 7, 8]);        // másik megoldás
console.log(algebra.arr1);
algebra.what = 'this is new';           // bármikor tudok új propertyt adni.
console.log(algebra.what);


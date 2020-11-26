console.log(document.querySelector('.hidden'));

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const template = `
    <div class ="user>
        <p>Firstname: ${user.firstName}</p>
        <p>Lastname: ${user.lastName}</p>
        <p>Age: ${user.age}</p>
    </div>`
//template string, használjuk nyugodtan!!!

document.querySelector('body').insertAdjacentHTML('beforeend', template);
console.log();

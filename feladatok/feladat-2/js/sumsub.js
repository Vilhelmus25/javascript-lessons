let summation;
let subtraction;

summation = (a, b) => {
    if (a === undefined || b === undefined) {
        return 0;
    }
    return a + b;
}

subtraction = (a, b) => {
    if (a === undefined || b === undefined) {
        return 0;
    }
    return a - b;
}

console.log('With params: ' + summation(3, 2));
console.log('With params: ' + subtraction(9, 5));
console.log('With Zero params: ' + summation());
console.log('With One param: ' + subtraction(9));
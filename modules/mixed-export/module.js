'use strict';

const age = 30;
const isDead = true;
const user = {
    firstName: 'Jane',
    lastName: 'Doe'
};
// ez is használható, de a másik rövidebb, ugyanaz
// export const age = 30;
// export const isDead = true;
// export default const user = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// };
// az age-t és az isDead-et exportálom és a user-t default exportálom

export {
    age, isDead
};
export default user;            // lehet mixelni így-e!

'use strict';

import user, { age, isDead } from './module.js';             // user után ',' aztán object destructuring        előbb mindig az export defaultot kell importálni és aztán a többit, akkor nem lesz gond

console.log(user, age, isDead);

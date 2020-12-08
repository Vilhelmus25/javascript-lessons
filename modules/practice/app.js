'use strict';

import { token } from './storage-practice1.js';             // user után ',' aztán object destructuring        előbb mindig az export defaultot kell importálni és aztán a többit, akkor nem lesz gond
import storedCookies from './storage-practice2.js';
import { userHandler } from './storage-practice3.js';
console.log(token, storedCookies, userHandler);

'use strict';
// ez tartalmazza az összes kis modult amit használni szeretnék
import {    // az export mivel 2 objectre mutat, ezért object destructuringot kell használnom
    // sumValues, subtractValues        // default mód
    sum         // ha volt as "..."
} from './module.js'

//console.log(sumValues(2, 3));
console.log(sum(2, 3));     // ha volt as "..."
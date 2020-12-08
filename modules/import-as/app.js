'use strict';
// ez tartalmazza az összes kis modult amit használni szeretnék
import {    // az export mivel 2 objectre mutat, ezért object destructuringot kell használnom
    sumValues as sum       // ha importálok akkor is lehet as-t használni, ilyenkor az exportált név nem módosul
    //sum as sumValues      // ezt is megtehetem, ha az exportban volt 'as', de ennek nincs sok értelme, felesleges lépés (akkor lehet ilyen, ha ahol használni akarom a sum-ot, ott már van egy sum fv és hogy ne akadjon össze, akkor itt máshogy hívom, akár úgy ahonnan importálom eredetileg)
    // ha volt as "..."
} from './module.js'

//console.log(sumValues(2, 3));
console.log(sum(2, 3));     // ha volt as "..."
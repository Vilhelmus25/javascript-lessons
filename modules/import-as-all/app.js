'use strict';
// ez tartalmazza az összes kis modult amit használni szeretnék
import * as MyMath from './module.js'       // ilyenkor mindent kiimportál innen és egy MyMath objektumba teszi

//console.log(sumValues(2, 3));
console.log(MyMath.sumValues(2, 3));     // ha volt as "..."
console.log(MyMath.subtractValues(10, 4));


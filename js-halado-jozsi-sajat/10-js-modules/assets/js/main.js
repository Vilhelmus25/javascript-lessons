import { shuffle as sh, test } from './utils.js';           // as az alias, de lehet a saját nevével is és akkor úgy kell meghívni.
//import { localDB } from './db.js';
import DB from './db.js';           // itt olyan nevet adunk neki amit jól esik

(function () {
    const names = ['Józsi', 'Piri', 'Sanyi'];
    sh(names);
    localDB.setItem('todos', [{ text: 'feladat', done: false }]);
    console.log(names);
})();
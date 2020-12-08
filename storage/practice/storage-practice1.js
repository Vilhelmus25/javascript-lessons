'use strict';

//  1.Feladat:  
//  Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, ami 15 perc után lejár: 
//  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

const token = {
    setCookie(value, expirationDays = 15, path = '/') {
        const expire = new Date();
        expire.setTime(expire.getTime() + (expirationDays * 1000 * 60));

        // Van olyan, hogy maxAge, amihez csak hozzá kel adni a +15 percet másodpercben.
        const expires = expire.toString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    }
}
token.setCookie(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`);
console.log(token);

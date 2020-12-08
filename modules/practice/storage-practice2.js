'use strict';


// 2. Feladat:
// Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

// viewed: 5
// uid: 354774631237
// ssid: Bx55OWbHJ0Vt_IGIFÍ

// Írj egy olyan objectet, az alábbi három metódust megvalósítja: - kiolvassa a sütik nevét, és értékét - átmenti őket sessionStorage-be - törli a sütiket

const cookieObject = {

    viewed: ['viewed', '5'],
    uid: ['uid', '354774631237'],
    ssid: ['ssid', 'Bx55OWbHJ0Vt_IGIFÍ'],
}

const storedCookies = {
    setCookie(name, value) {

        document.cookie = `${name}=${value}`;
    },

    getCookieName(name) {
        const keyValuePairs = document.cookie
            .split('; ')      // splittel vágom a stringet a '; ' mentén és minden elemet egy tömbbe tesz
            .find(cookie => cookie.startsWith(`${name}=`))      // kell az egyenlőségjel a biztonság kedvéért
        console.log(keyValuePairs);
        return keyValuePairs;//? keyValuePairs.split('=')[1] : '';
    },

    setCookieToSessionStorage(str) {
        sessionStorage.setItem(`${str.split('=')[0]}`, `${str.split('=')[1]}`);
        console.log(sessionStorage.getItem(`${str.split('=')[0]}`));                    // ez iratja ki az értéket

    },

    deleteCookie(name) {            // az expiration date-et átállítjuk egy múltbéli időre.
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    },
};
storedCookies.setCookie(cookieObject.viewed[0], cookieObject.viewed[1]);
storedCookies.setCookie(cookieObject.uid[0], cookieObject.uid[1]);
storedCookies.setCookie(cookieObject.ssid[0], cookieObject.ssid[1]);
//storedCookies.getCookieToSessionStorage();
const viewedCookie = storedCookies.getCookieName('viewed');
const uidCookie = storedCookies.getCookieName('uid');
const ssidCookie = storedCookies.getCookieName('ssid');

storedCookies.setCookieToSessionStorage(viewedCookie);
storedCookies.setCookieToSessionStorage(uidCookie);
storedCookies.setCookieToSessionStorage(ssidCookie);

storedCookies.deleteCookie('uid');

export default storedCookies;

const saveCookie = (name, content, expireDate = new Date()) => {
    document.cookie = `${name}=${content}; expires=${expireDate}`;
};

const expire = new Date(new Date().getTime() + 15 * 60 * 1000);
// saveCookie('token', 'ldskjflkdsjf', expire);

// Cookie handler object.
const cookieHandler = {
    getCookie(name) {
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith(name))
            .split('=')[1];
        return cookieValue;
    },
    removeCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    },
    setSessionStorage(key, value) {
        window.sessionStorage.setItem(key, value);
    },
    moveToSession(name) {
        const value = this.getCookie(name);
        this.removeCookie(name);
        this.setSessionStorage(name, value);
    }
};

// cookieHandler.moveToSession('token');

const userHandler = {
    // Delay time in seconds
    delay: 5,
    repeatCount: 10,
    repeatNum: 0,
    url: 'http://localhost:3000/users',
    // 1. Adatok lekérése.
    // 2. Ha nem sikerül, bizonyos időközönként megismételni, bizonyos számban.
    // 3. Kiírom, hogy az alkalmazás offline módban van.
    // 4. Ha az összes kérés sikertelen volt, akkor betöltöm a localStorage-ból.
    // 5. Ha ez nem sikerült, akkor üres tömböt adok vissza.


    async getList() {

        while (this.repeatNum < this.repeatCount) {
            try {
                const resolve = await fetch(this.url);
                const data = await resolve.json();
                this.repeatNum = 0;
                return data;
            } catch (e) {
                this.repeatNum++;
                new Promise((res => setTimeout(res, this.delay * 1000)));
                return this.getList();
            }
        }

        this.repeatNum = 0;
        alert('Szerverhiba');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('Üres a tároló');
            return [];
        }
    },


    /* async getList() {
        // return new Promise((res, rej)){      // ezt váltja ki az async
        // }
        while (this.repeatNum < this.repeatCount) {
            try {

                //return fetch(this.url).then(response => response.json()).then(data => console.log(data));             // ez a rövidebb, de nehezebben értelmezhető           
                const response = await fetch(this.url);                         // kérés        --milyen hiba lehet: nem jó az url
                const data = await response.json();                             // válasz       --milyen hiba lehet: nem json formátumot kaptam
                this.repeatNum = 0;
                return data;
            } catch (e) {               // hiba esetén azonnal ide ugrik
                this.repeatNum++;       // mivel hiba volt, növelni kell a próbálkozások számát, különben végtelen ciklus lenne
                // várakozok, promise-sal lehet úgy hogy ne faggyon ki a program arra az időre
                await new Promise((res => setTimeout(res, this.delay * 1000)));     // 5 sec múlva meghívja a res-t és megvárom amíg meghívásra kerül egy await-el, de csak itt, a while ciklus is megáll
                return this.getList();                                              // rekurzívan meghívja önmagát
            }
        }

        this.repeatNum = 0;
        alert('Az alkalmazás offline.');
        if (localStorage.users) {
            return JSON.parse(localStorage.users);
        } else {
            alert('A helyi tároló is üres.');
            return [];
        }

    }, */
    async showList(parent, delay, repeatCount) {
        parent = document.querySelector(parent);
        this.delay = delay;
        this.repeatCount = repeatCount;
        const list = await this.getList();
        this.generateList(parent, list);
        localStorage.users = JSON.stringify(list);
    },
    generateList(parent, list) {
        list.forEach(element => {
            const p = document.createElement('p');
            p.classList.add('user-row');
            p.textContent = `${element.firstName} ${element.lastName}`;
            parent.appendChild(p);
        });
    }
}

export {
    saveCookie,
    cookieHandler,
    userHandler,
};

// userHandler.showList('.user-list');
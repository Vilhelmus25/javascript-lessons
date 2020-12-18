export const shuffle = (array) => {                                           // összekeverjük a kártyafront típusokat, hogy random legyen
    let currentIndex = array.length, tempElement, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempElement = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempElement;

    }
    return array;
};

export const test = () => {            // ezt csak itt érjük el, ezt nem exportáltuk. Ha van export akkor igen
    console.log("test");
}
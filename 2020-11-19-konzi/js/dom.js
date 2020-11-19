const element = document.querySelector('.container-2');

console.log('parent:', element.parentElement);
console.log('nextSibling:', element.nextSibling);
console.log('previousSibling:', element.previousSibling);
console.log('firstChild:', element.firstChild);
// console.log('lastChild:', element.lastChild.nodeValue);         // .nodeValue esetén empty space    ez azért van, mert formázva van a html és minden sortörést is értéknek/szövegnek számít.
console.log('lastChild:', element.lastChild);        

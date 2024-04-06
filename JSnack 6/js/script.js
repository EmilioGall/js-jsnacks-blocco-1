// TEXT JSnack6
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

const inputNum = parseInt(prompt(`Hello, User! Insert a numer.`));

console.log(inputNum, "Input Number");

for (let i = 1; i <= Math.floor(inputNum); i++) {

    console.log(Math.pow(i, 3));

};
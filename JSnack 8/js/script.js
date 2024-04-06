// TEXT JSnack8
// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

const numDigits = 4;

const inputNum = prompt(`Hello, User! Please, insert ${numDigits} digits numer.`);

console.log(inputNum, typeof inputNum, inputNum.length);

if ((inputNum.length === numDigits) && (!isNaN(inputNum))) {

    let sum = 0;

    console.log("Empty Sum", sum, typeof sum);

    for (let i = 0; i < inputNum.length; i++) {

        let numDigit = inputNum[i];

        console.log(numDigit, typeof numDigit, numDigit.length);

        let numDigitNum = parseInt(numDigit);

        console.log(numDigitNum, typeof numDigitNum);

        sum = sum + numDigitNum;

        console.log("Temporary sum =", sum, typeof sum);

    };

    console.log("Final sum =", sum, typeof sum);

} else {

    alert(`Wrong inputs! Please, insert ${numDigits} digits numer.`)
};
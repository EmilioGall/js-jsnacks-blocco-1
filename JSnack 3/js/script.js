// TEXT
// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

const sumVal = document.getElementById("sum"); // object | null

console.log(sumVal, typeof sumVal);

let sumInputs = 0;

let numArray = [];

const nNum = 10;

let i = 0;

while (i < nNum) {

    const inputNum = parseInt(prompt(`Hello, User! Insert ${nNum - i} numers.`));

    console.log(inputNum, i+1, typeof inputNum);

    if (!isNaN(inputNum)) {

        sumInputs += inputNum;

        console.log(sumInputs, typeof sumInputs);

        i++;

    } else {

        alert("You must enter a number!");

    }

};

sumVal.innerHTML = sumInputs;
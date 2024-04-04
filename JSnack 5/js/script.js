// TEXT JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let numbersArray = [ ];

console.log(numbersArray, typeof numbersArray);

let nTimes = 6;

for ( i=0; i < nTimes; i++) {

    const inputNum = parseInt(prompt(`Hello, User! Insert ${nTimes - i} numers.`));

    if (inputNum % 2 !==0 ) {

        numbersArray.push(inputNum)

    }

};

console.log(numbersArray, typeof numbersArray);

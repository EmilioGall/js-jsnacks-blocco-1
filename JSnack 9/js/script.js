// TEXT JSnack9
// Calcola la somma e la media dei primi 10 numeri.

const inputNum = 10;

console.log(inputNum, typeof inputNum);

let sum = 0;

console.log("Empty Sum", sum, typeof sum);

for (let i = 0; i < inputNum; i++) {

    let num = i;

    console.log(num, typeof num);

    sum = sum + num;

    console.log("Temporary sum =", sum, typeof sum);

};

console.log("Final sum =", sum, typeof sum);

let average = sum / inputNum;

console.log("Average =", average, typeof average);



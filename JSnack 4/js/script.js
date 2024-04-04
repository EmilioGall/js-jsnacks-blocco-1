// TEXT JSnack 4
// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.

const inputName = prompt(`Hello, User! Insert your name, please.`);

console.log(inputName, typeof inputName);

let validNameArray = ["alpha", "beta", "gamma"];

let isFound = false;

console.log(isFound, typeof isFound);

for ( i=0; i < validNameArray.length; i++) {

    const validName = validNameArray[i];

    console.log(validName, typeof validName);

    if (validName.toLocaleLowerCase === inputName.toLocaleLowerCase) {

        isFound = true;

    }

};

console.log(isFound, typeof isFound);

if (isFound == true) {

    alert ("Access granted.")

} else {

    alert ("You can not pass!")

}
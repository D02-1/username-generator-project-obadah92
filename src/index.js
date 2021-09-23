// was benötigen wie?

const fs = require('fs');
const path = require('path');
/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */


function getWords() {
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
}

/**
 * @function createRandomNumber
 * @description Creates a random number according to a minimal and maximal value
 * @param{number} minNumber
 * @param{number} maxNumber
 * @returns{number}
 */


function createRandomNumber(minNumber, maxNumber) {

    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // random =0.5* 50000-10000=15000+25000
    // wir geben die zufällige nummer zrück
    return num;
}
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to Uppercase, then returns string
 * @param { string } word 
 * @returns { string }
 */




function capitalizeString(word) {

    if (word === undefined || word.length === 0 || !isNaN(word))

    {
        return "Default";
    }
    // wir nehmen den ersten Buchstaben von unserem String
    const wordStart = word.charAt(0).toUpperCase();
    const wordRest = word.substring(1).toLowerCase();

    return wordStart + wordRest;
}

console.log(capitalizeString("Hallo"))



function createRandomUserName(maxNumber) {
    const words = getWords();

    const adj = words.adjs[Math.floor(Math.random() * (words.adjs.length - 1))];


    const noun = words.nouns[Math.floor(Math.random() * (words.nouns.length - 1))];

    const randomNumber = createRandomNumber(10000, maxNumber);
    console.log(randomNumber);

    const finalUserName = `${capitalizeString(adj)}${capitalizeString(noun)}${maxNumber!==0 ? randomNumber:''}`;
    console.log(finalUserName);
}
createRandomUserName(50000);
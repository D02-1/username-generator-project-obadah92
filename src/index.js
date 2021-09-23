// was benötigen wie?

//const fs = require('fs');
//const path = require('path');
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
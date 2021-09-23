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
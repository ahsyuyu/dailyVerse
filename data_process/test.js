var fs = require("fs");
var verses = JSON.parse( fs.readFileSync("verses.json") );

console.log(verses[0].ch);
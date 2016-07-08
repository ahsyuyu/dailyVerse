var fs = require("fs");
var lines = fs.readFileSync("rawData.txt","utf8").split(/\r?\n/);
var verses = [];
for(var i = 0; i < lines.length; i++){
	var verse = {};
	verse["ch"] = {};
	verse["en"] = {};
	var line = lines[i];

	var m = line.match(/(.*?) ?(\d+):(\d+[-,]?[ab\d+ ]*)::(.*)/);
	// console.log(m);
	verse["ch"]["book"] = m[1];
	verse["chapter"] = m[2];
	verse["verse"] = m[3];
	verse["ch"]["text"] = m[4];

	verses.push(verse);

	
}
console.log(verses);
fs.writeFileSync("verse.json",JSON.stringify(verses,""," "), "utf8");

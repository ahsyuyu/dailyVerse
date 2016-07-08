var fs = require("fs");
var lines = fs.readFileSync("rawData.txt","utf8").split(/\r?\n/);
var n = "";
var out = "";
for(var i = 0; i < lines.length; i++){
	var line = lines[i];
	if(line.match(/\d/)) {
		out += n + "\n";
		n = line + "::";
	} else {
		n += line + "<br>"
	}
}

console.log(out);
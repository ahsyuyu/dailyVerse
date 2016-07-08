var fs = require("fs");
var bible = fs.readFileSync("bible.xml","utf8").split(/\r?\n/);
var output = [];
var filename = "";

for(var i = 0 ; i < bible.length; i++){
	var m = bible[i].match(/<book num="([a-zA-Z]+_?[a-zA-Z]+_?[a-zA-Z]+)">/);
	if(m){
		if(output.length != 0){
			fs.writeFileSync("data/" + filename, output.join("\n"), "utf8");
		}
		filename = m[1].toLowerCase()+".xml";
		console.log(filename);
		output = [];	
	} 
	output.push(bible[i]);
}
fs.writeFileSync("data/" + filename, output.join("\n"), "utf8");


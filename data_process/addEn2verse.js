var fs = require("fs");
var http = require("http");
var verses = JSON.parse(fs.readFileSync("verse.json","utf8"));
var map = JSON.parse(fs.readFileSync("book.json","utf8"));
//var bible = fs.readFileSync("kjv.xml","utf8").split(/\r?\n/);

var getEnVerse = function(book, chapter, verse){
	
	http.get("http://labs.bible.org/api/?passage=" + book + "+" + chapter + ":" + verse + "&type=json",function(res){
	    res.setEncoding('utf8');
	    res.on('data',function(data){
	    	var d = JSON.parse(data);
	 		console.log(d[0].text);
	    });
	    
	});
	
}


for(var i = 0; i < verses.length; i++) {
	//add eng book name
	var ch = verses[i]["ch"]["book"];
	verses[i]["en"]["book"] = map[ch];
	
	//add eng text
	var book = verses[i]["en"]["book"];
	var chapter = verses[i]["chapter"];
	var verse = verses[i]["verse"].match(/\d+/)[0];
	var lines = fs.readFileSync("data/" + book.toLowerCase() + ".xml","utf8").split(/\r?\n/);
	for(var j = 0; j < lines.length; j++){
		if(lines[j].match('<chapter num="' + chapter + '">')) break;
	}
	for(var k = j; k < lines.length; k++){
		if(lines[k].match('<verse num="' + verse + '">')) break;
	}
	console.log(book, chapter,verse);
	var text = lines[k].match('<verse num="' + verse + '">(.*)</verse>')[1];
	text = text.replace(/<\/?[ ="a-z]+>/g,"");
	verses[i]["en"]["text"] = text;
	

}



//getEnVerse("Leviticus", "19", "32");

// console.log(verses);
fs.writeFileSync("verse.json",JSON.stringify(verses,""," "), "utf8");
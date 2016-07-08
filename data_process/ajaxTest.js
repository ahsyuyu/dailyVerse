var http = require("http");

console.log("Start");
http.get("http://labs.bible.org/api/?passage=John+3:16-17&type=json",function(res){
    console.log("Connected");
    res.setEncoding('utf8');
    res.on('data',function(data){
    	var d = JSON.parse(data);
    	console.log(d[0].bookname);
    });
});


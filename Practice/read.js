
var fs = require('fs');

var filename = "file.txt";

function afterread(error,data){
    console.log("inside after read");
    console.log(data.toString());
}

fs.readFile(filename,afterread);
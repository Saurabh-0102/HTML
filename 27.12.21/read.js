

var fs = require('fs');

function onread(err,data){
    console.log("data read from file");
    console.log(data.toString());
}

fs.readFile('result.txt',onread)
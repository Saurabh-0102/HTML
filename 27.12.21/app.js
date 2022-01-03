

var fs = require('fs');

var filename = "result.txt";

function afterwrite(){
    console.log("data is scccessfully written into the file");
}

fs.writeFile(filename,"external data wirtten into result.txt file",afterwrite);


console.log("end of program");
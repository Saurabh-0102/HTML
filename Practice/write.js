

var sc = require('fs');

var filename = "file.txt";

function afterwrite(){
    console.log("File has been successfully");
}

sc.writeFile(filename,"Hello this is demo data into file txt",afterwrite);

console.log("End of file");
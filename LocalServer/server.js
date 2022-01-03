

var http = require('http');
const { json } = require('stream/consumers');

var data = "welcome to local server";


var onRequestHandler = function (request, response) {

    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('<h1>' + data + "</h1>");

    // var person = {
    //     'firstname': 'saurabh',
    //     'lastname': 'jharia',
    //     'age': '25'
    // };

    // var strjson = JSON.stringify(person);
    // response.write(strjson);
    response.end();

}

var server = http.createServer(onRequestHandler);
server.listen(9999);
console.log("server is listning on port 9999");
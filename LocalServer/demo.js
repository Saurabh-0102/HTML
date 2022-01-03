var http = require('http');

var data = "this is demo server data for local host";

var onHandle = function (request, response) {

    response.witeHead(200, { 'content-Type': 'text/html' });
    response.write('<h1>' + data + "</h1>");
    response.end();
}

var server = http.createServer(onHandle);
server.listen(9999);
console.log("demo server is listning on port no 9999");
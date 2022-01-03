var http = require('http');
const path = require('path');
var url = require('url');
var data = "this is demo server data";

var onHandle = function (req, res) {
    res.writeHead(200, { 'content-type': 'text/json' });
    // res.write('<h1>' + data + '</h1>');

    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    var person = {
        'firstname': 'saurabh',
        'lastname': 'jhariya',
        'age': 26
    };

    var str = JSON.stringify(person);
    res.write(str);
    res.end();
}

var server = http.createServer(onHandle);
server.listen(9999);
console.log("server is listening on port no 9999");
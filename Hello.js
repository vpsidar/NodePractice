var http = require('http');
// Initial Content Adding more Content
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! From Vijay');
}).listen(8080);
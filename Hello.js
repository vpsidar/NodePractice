var http = require('http');
var dt = require('./modules/myfirstmodule');
// Initial Content Adding more Content
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Current Date And Time is :' + dt.myDateTime());
}).listen(8080);
var http = require('http');
var dt = require('./modules/myfirstmodule');
// Initial Content Adding more Content
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Current Date And Time is :' + dt.myDateTime());
    res.end();
}).listen(8080);
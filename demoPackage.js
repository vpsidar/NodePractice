var http = require('http');

var uc = require('upper-case');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    
    res.end(" upper " + uc.upperCase("Hello Upper Case"));
}).listen(8080);
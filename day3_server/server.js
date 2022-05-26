const http = require('http');
const server = http.createServer((req,res) => {
    res.write('hello client over there! No update');
    res.end();
});
server.listen(8040,() => {
    console.log('Hey we are ready to take requests')
})
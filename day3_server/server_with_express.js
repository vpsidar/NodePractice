
const express = require('express');
const path = require('path');
const app = express();

app.use('/static',express.static(path.resolve(__dirname,"public")));  // this will serve all the files inside public folder statically
app.get('/',(req,res) => {
    res.send('Helo');
})
app.listen(8040,() => {
    console.log('we are listening the port');
});

//console.log("Hello World and Vitor");
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World and Tafs');
})
app.listen(3000);
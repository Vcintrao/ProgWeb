//console.log("Hello World and Vitor");
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Hello World andddd Tafs");
})
app.listen(3000);
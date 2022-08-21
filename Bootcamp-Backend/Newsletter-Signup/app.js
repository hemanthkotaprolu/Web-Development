const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.send("Server is running");
});

app.listen(port, function() {
    console.log('Server started running on: ' + port);
});
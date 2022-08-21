const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 4000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result is: " + result);
});

// BMI CALCULATOR
app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = weight/ Math.pow(height,2);
    
    res.send("Your BMI is: " + result);
    // console.log(req.body);
})

app.listen(port, function () {
    console.log('Server started on: ' + port);
    console.log('To view the application please visit localhost:' + port);
});

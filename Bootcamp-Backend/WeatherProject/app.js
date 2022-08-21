const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
   res.sendFile(__dirname + "/index.html");     
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const appKey = "57ae07e23725409ac7bdac5b5156f96b";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=" + unit + "&appid=" + appKey;

    https.get(url, function(response) {
        
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const placeName = weatherData.name;
            const placeCountyName = weatherData.sys.country;
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
            
            res.write("<h1>" + "The temperature in " + placeName + "," + placeCountyName + " is " + temp + " degrees celcius. " +"</h1>")
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<img src=" + imageURL + " alt="+"logo" + ">")
            
            res.send();
        })
    });
});



app.listen(port, function() {
    console.log("Server is started running on: " + port);
})
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    
    const jsonData = JSON.stringify(data);
    
    const url = "https://us8.api.mailchimp.com/3.0/lists/9dadc2e5c2";
    const options = {
        method: "POST",
        auth: "kotaproluhemanth:ac57010615f181e34bd22baa2b221dc7-us8"
    };
    
    
    const mailchimpRequest = https.request(url, options, function(response) {
        
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        response.on("data", function(data) {
            // console.log(JSON.parse(data));
        });
    });
    
    mailchimpRequest.write(jsonData);
    mailchimpRequest.end();
});

app.post("/failure", function(req,res) {
    res.redirect('/');
})

app.listen(process.env.PORT || port, function() {
    console.log('Server started running on: ' + port);
});

//mailchimp API key
// ac57010615f181e34bd22baa2b221dc7-us8

// mailchimp unique ID
// 9dadc2e5c2
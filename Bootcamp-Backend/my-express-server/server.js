const { response } = require('express');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('<h1>Hello There!!</h1>');
});

app.get('/contact', function (req, res) {
    res.send('<h1>Please contact me!!</h1>');
});

app.get('/about', function (req, res) {
    res.send(
        '<p>I am Kotaprolu Hemanth. Currently working as a data analyst at Tiger Analytics. I am an ' +
            ' open source enthusiast and also teaching my self Full stack development. I am also intrested in Devops.</p>'
    );
});

app.listen(port, function () {
    console.log('server started on port: ' + port);
});

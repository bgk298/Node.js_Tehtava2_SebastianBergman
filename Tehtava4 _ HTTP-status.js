const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/api/withoutpara', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.get('/api/exercise/', function(req, res) {
    console.log('Name: ' + req.query['name']);
    console.log('Occupation: ' + req.query['occupation']);
    console.log('Place of birth: ' + req.query['placeofbirth']);
});

app.get('/api/get', function(req, res) {
    let recievednumber1 = req.query.number1;
    let recievednumber2 = req.query.number2;
    console.log(recievednumber1 + " " + recievednumber2);
});

app.post('/api/post', function(req, res) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    console.log("My name is: " + firstname + " " + lastname);
});

app.post('/api/anotherpost', function (req, res) {
    let fruits = [req.body.fruit];
    let gender = req.body.gender;
    console.log("Statuscode: 200");
    return res.send("<h1>Hello from Express!</h1><br><h2>POST parameters</h2><br><p>I recieved these parameters:</p><br><ul><li>My favourite fruits: " + fruits + "</li><br><li>My gender is: " + gender + "</li></ul>");
});

app.post('/api/login', function (req, res) {
    let username = req.body.user;
    let password = req.body.pwd;
    if(username == "" & password == "") {
        console.log("Statuscode: 400");
    } else if(username == "mark" & password == "giraffe") {
        console.log("Statuscode: 200");
    } else {
        console.log("Statuscode: 403");
    }
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
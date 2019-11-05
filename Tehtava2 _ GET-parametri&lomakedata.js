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

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
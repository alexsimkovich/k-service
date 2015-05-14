var express = require('express');
var app = express();
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('kservice_test', ['kservice_test']);

router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use('/', router);

app.use(express.static(__dirname + "/"));
app.set('adminpanel', __dirname + '/adminpanel');

app.get('/kservice_test', function (req, res) {
    console.log("I recieved a GET request");
    db.kservice_test.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.listen(3000);
console.log("Server running on port 3000");
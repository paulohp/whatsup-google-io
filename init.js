var express = require('express');
var fs = require('fs');
var app = express();


app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.get('/api/google-ios', function(req, res){
    fs.readFile(__dirname + '/api-stub/google-ios.json', 'utf8', function(err, data){
        res.send(data);
    });
});

app.get('/api/gdgs', function(req, res){
    fs.readFile(__dirname + '/api-stub/gdgs.json', 'utf8', function(err, data){
        res.send(data);
    });
});

app.listen(5000, function(){
  console.log('Application are running on port 5000');
});
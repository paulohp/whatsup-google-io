'use strict';
// define globals
var express = require('express'),
    io = require('socket.io'),
    http = require('http'),
    app = express(),
    server = http.createServer(app),
    io = io.listen(server),
    fs = require('fs');

require('./server/sockets/base')(io);


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

app.get('*', function(req, res){
    res.redirect('/');
});

server.listen(process.env.PORT || 4500, function(){
  console.log('Application are running on port 4500');
});
var express = require('express');
var app = express();

//Creating Routes
// '/' => 'Hi there!'
app.get('/', function(req, res){
    res.send('Hi there!');
});

// 'bye' => 'Goodbye' 
app.get('/bye', function(req, res){
    res.send('Buh bye');
});

// 'horse' => 'whinny'  
app.get('/dog', function(req, res){
    res.send('WHINNY!!!');
});


app.get('/r/:subredditName', function(req, res){
     var subreddit = req.params.subredditName;
     res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' ' + 'SubReddit!');
});

app.get('/r/:subredditName/comments/:id/:title/', function(req, res){
     res.send('WELCOME TO A COMMENTS PAGE!');
});

app.get('*', function(req, res){
    res.send('Shining star!');
});

app.listen(5000, function (){
    console.log('Server started!!');
});

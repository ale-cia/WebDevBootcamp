var express = require('express');

var app = express();

     //Creating routes
// '/' => 'Hi there!'

app.get('/', function(req, res){
    res.send('You made it to the ROOT!');
});


    // 'bye' => 'Goodbye' 


app.get('/bye', function(req, res){
    res.send('Buh bye');
});

    // 'dog' => 'meow'  


app.get('/dog', function(req, res){
    res.send('MEOW!');
});


app.get('/travel/:', function(req, res){
         var music = req.params.travelDestination;
         res.send('WELCOME TO THE ' + travel.toUpperCase() + ' ' + 'Travel!');
});

app.get('/travel/:travelDestination/comments/:id/:title/', function(req, res){
         res.send('WELCOME TO A COMMENTS PAGE!');
});

app.get('*', function(req, res){
    res.send('Shining star!');
});

app.listen(5000, function (){
    console.log('Server started!!');
});

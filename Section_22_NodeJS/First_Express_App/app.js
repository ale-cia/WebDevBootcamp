var express = require('express');
//Initialized express

var app = express();
//Saved it to a variable
//app is an instance of express



//Routing refers to the definition of application end points (URIs) and how they respond to client requests.
// '/' => 'Hi there!'

//function takes two parameters
// URL or '/' path when the user makes a GET request is made to / or root
 //**Route**
 //Routes can be thought of as pages. The sever is serving a page based on a request


app.get('/', function(req, res){
    // When a request is made run this function = callback function takes two parameters
    res.send('You made it to the ROOT!');
    //Root of server
    //Repsonding with text
    //"Hi there" will be printed in the browser. Won't work yet because we're
    //missing some code. Must write the //code to tell it to listen for a different request.
});


// 'bye' => 'Goodbye' //**Route to a page**


app.get('/bye', function(req, res){
    res.send('Buh bye');
});

// 'dog' => 'meow'  //**Route to a page**


app.get('/dog', function(req, res){
    res.send('MEOW!');
});


app.get('/r/:subredditName', function(req, res){
         //The ‘:’ tells Express not to match character for character but any name that appears after the ‘:’
         var subreddit = req.params.subredditName;
         res.send('WELCOME TO THE ' + subreddit.toUpperCase() + ' ' + 'SubReddit!');
});

app.get('/r/:subredditName/comments/:id/:title/', function(req, res){
         //The ‘:’ tells Express not to match character for character but any name that appears after the ‘:’
         res.send('WELCOME TO A COMMENTS PAGE!');
});

//Catch all for all routes that haven't been defined
app.get('*', function(req, res){
    res.send('Shining star!');
});

//The order of routes is important. If the wildcard or catch all route os first the others won't run. The first route that matches a request is the only one that runs


//Tell Express to listen for requests, start the server
app.listen(5000, function (){
    console.log('You did it! :) Server has started!!');

//Port number to listen on
//Defininig the route isn't enough have to tell the app to listen on a particular port
});
//req and res are objects
//req contains all the info about the req that was made that triggered this route
//res contains all the info that will be sent with the response

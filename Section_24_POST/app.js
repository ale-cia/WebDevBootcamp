var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.use(express.static('server/public'));
app.listen(port, function() {
    console.log('Server running on port:', port);
  });
  
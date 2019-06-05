var express = require("express");
var app = express();

app.get("/messi", function(req,res){
    res.send("Hello messi");
})

app.get("/name/:name", function(req, res){
    var name = req.params.name;
    res.send("<h1>Hello " + name +"</h1>");
});

app.get("/google/:search", function(req, res){
    var search = req.params.search;
    res.redirect("http://google.com/search?q="+search);
});

app.listen(3000, function(){
    console.log("example is running on port 3000");
})
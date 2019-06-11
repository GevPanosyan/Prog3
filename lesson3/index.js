var express = require("express");
var app = express();

app.use(express.static('C:/Users/comp/Desktop/Prog3/GameOfLife/'));

app.get("/",function(req,res){
    res.redirect('index.html');
});

app.listen(3000, function(){
    console.log("exmaple is running on port 3000");
});
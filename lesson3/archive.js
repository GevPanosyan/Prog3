var fs = require("fs");
function main(){
    var file = "hello.txt";
    fs.appendFileSync(file,"Hello World\n");
}
main();
var Square = require("./module");
var mySquareObject = new Square(5);

function main(){
    console.log(mySquareObject.getArea());
}
main();

app.get("/", function(req,res){
    res.send("Hello World");
});

app.get("/Gev", function(req,res){
    res.send("Hello dear Gev");
});

app.get("/name/:name",function(req,res){
    var name = req.params.name;
    res.send("Hello " + name + " jan!!!");
});

app.get("/google",function(req,res){
    res.redirect("http://google.com")
});

app.get("/google/:search",function(req,res){
    var search = req.params.search;
    res.redirect('http://google.com/search?q=' + search);
});

app.get("/*",function(req,res){
    res.send("404 Error \n Page Not Found")
});

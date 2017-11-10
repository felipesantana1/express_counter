var express = require("express");
var session = require("express-session");
var app = express();

app.use(express.static(__dirname + "/views"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(session({secret: 'codingdojorocks'}));

app.get("/", function(req, res){

    if(req.session.count){
        req.session.count += 1;
    }
    else{
        req.session.count = 1;
    }
    res.render("index", {count: req.session.count});
});

app.post("/plustwo", function(req, res){
    req.session.count += 1;
    res.redirect("/");
});

app.post("/reset", function(req, res){
    req.session.count = 0;
    res.redirect("/");
});

app.listen(8000, function(){
    console.log("listening on port 8000");
});
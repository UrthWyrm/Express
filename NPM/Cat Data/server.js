var express = require("express");
var app = express();

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");app.get("/cats", function(request, response) {
    response.render("cats");
})

app.get("/cali", function(reuqest, response){
    var details = {
        name : "Cali",
        favFood : "MeowMix",
        age : "1",
        pic : "images/cat1.jpg",
        spots : ["On your pillow", "On the couch", "Sitting near the window"]
    }
    response.render("details", {kitty: details});
})
const express = require("express");
const app = express();
app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/cars", function(request, response) {
    response.render("cars");
})
app.get("/cats", function(request, response) {
    response.render("cats");
})
app.get("/car/new", function(request, response) {
    response.render("form");
})


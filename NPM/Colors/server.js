// Create a socket application that presents the user with 3 buttons for color options. 
// When a user clicks on one of the color options, all currently connected socket users should have their entire background change to that color.

// BONUS: As soon as a new user connects to our server, update their color with the most 
// recent color previously selected by the last user.

// Imports go here /////////////////////////////////////////////
var express = require("express");
var app = express();
var server = app.listen(8000);
var io = require("socket.io")(server);
color = "";
//////// Configurations Go Here /////////////////////////////////
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
////////// Sockets Go Here //////////////////////////////////////
io.on("connection", function(socket) {
    console.log("Now Connecting");
    io.emit("launch", {
        background : color
    });
    socket.broadcast.emit("launch", {
        background : color
    });

    socket.on("blue_push", function() {
        socket.emit("blue_background");
        socket.broadcast.emit("blue_background");
        color = "blue"
    });
    socket.on("red_push", function() {
        socket.emit("red_background");
        socket.broadcast.emit("red_background");
        color = "red"
    });
    socket.on("green_push", function() {
        socket.emit("green_background");
        socket.broadcast.emit("green_background");
        color = "green"
    });
});
////////// Routes Go Here ///////////////////////////////////////
app.get("/", function(req, res) {
    console.log("Hola!");
    res.render("index");
});
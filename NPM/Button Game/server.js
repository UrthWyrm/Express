var express = require("express");
var app = express();
var server = app.listen(8000);
var io = require("socket.io")(server);
var counter = 0;

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function(socket) {

    console.log("You Have Been Connected. The Count Begins Now");
    io.emit("new_count", {
        newCount : `This button has been pushed ${counter} times.`
    });
    socket.broadcast.emit("new_count", {
        newCount : `This button has been pushed ${counter} times.`
    });
    socket.on("epic_push", function() {
        counter += 1;
        socket.emit("new_count", {
            newCount : `This button has been pushed ${counter} times.`
        });
        socket.broadcast.emit("new_count", {
            newCount : `This button has been pushed ${counter} times.` 
        });
    })
    socket.on("reset_push", function() {
        counter = 0;
        socket.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times.`
        });
        socket.broadcast.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times.`
        });
    })
})

//Routes
app.get("/", function(req, res) {
    console.log("Hola!");
    res.render("index");
})


var express = require("express");
var app = express();
var path = require('path');
var router = express.Router();
var PORT = process.env.PORT ||  8080


app.use(express.static("plublic"))

app.get("/", function (req, resp) {
    resp.sendFile(path.join(__dirname+'/wma01.html'));
    });



app.listen(PORT, () => {
    console.log("Server Listening on port 3000!");
})
var express = require("express");
var app = express();
var PORT = process.env.PORT ||  8080

app.get("/", (req, resp)=> {
    resp.send("hello world");
});

app.listen(PORT, () => {
    console.log("Server Listening on port 3000!");
})
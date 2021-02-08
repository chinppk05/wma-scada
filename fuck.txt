var http = require("http");
var fs = require("fs");

http.createServer((req, resp) => {
    // Read file demo.html
    fs.readFile("test.html", (err, data) => {
        if (err) console.log('Error');
        resp.writeHead(200, {"Content-Type" : "text/html"});
        resp.write(data);
        resp.end();
    })
    
})
.listen(8081);
 
console.log("Server running at http://127.0.0.1:8081/");
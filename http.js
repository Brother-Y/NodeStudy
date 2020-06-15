const http = require("http");

let server = http.createServer((req,res) => {
    console.log(req);
    res.write("<h1>hello world</h1>");
    res.end();
})
server.listen(8000);
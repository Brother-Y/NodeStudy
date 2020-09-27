const http = require('http');
const Url = require('url')

http.createServer((req,res) =>{
    let obj = Url.parse(req.url,true);
    console.log(obj.pathname);
    console.log(obj.query);
    res.write('aaa');
    res.end();
}).listen(8080)
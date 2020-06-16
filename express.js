const express  = require("express");

let server = express();
let str =[{'a':15,'b':20},{"name":"bob","age":15}]
server.use("/a.html",function(req,res){
    res.send(str);
    res.end();
});
server.use("/b.html",function(req,res){
    res.send('bbb');
    res.end();
});
server.listen(8080);
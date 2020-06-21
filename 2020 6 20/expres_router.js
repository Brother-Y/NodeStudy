const express = require('express');

let server = express();
let oRoute = express.Router();
server.use('/user/',oRoute);
oRoute.get('/a.html',function(req,res){
    res.send('<h1>Hello World</h1>');
})

server.listen(8080);
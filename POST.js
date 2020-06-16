const http = require('http');
const querystring = require('querystring')
http.createServer((req,res) => {
    let str = "";
    req.on('data',function(data){
        str += data;
    });
    req.on('end',function(){
       let POST = querystring.parse(str);
       console.log(POST);
    });
    res.write('bbb');
    res.end();
}).listen(8080);
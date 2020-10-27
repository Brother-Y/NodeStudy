const fs = require('fs');
const http = require('http');


let server = http.createServer((req, res) => {
    let file_name ='./www' + req.url;
    fs.readFile(file_name, (err, data) => {
        if(err) {
            res.write('404');
        } else {
            res.write(data);
        }
        res.end();
    })    
});

server.listen(8888);

// fs.writeFile('./test.txt', '写内容成了', err => {
//     console.log(err);
// })

// fs.readFile('./test.txt', 'utf-8',(err, data) => {
//     if(err) return err;
//     console.log(data);
// })

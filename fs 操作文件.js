const fs = require('fs');

fs.readFile('./B站学习 旧/myql.js','utf8',(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

try {
    const data = fs.readFileSync('./axios.js','utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}

fs.writeFile('./text.txt','hello world',err => {
    if (err){
        console.log(err);
        return;
    }
})

fs.appendFile('./text.txt','你好我也好', err =>{
    if(err){
        console.log(err);
        return;
    }
})

// try {
//     const data = fs.writeFileSync('./text.txt','hello 洋');
// } catch (error) {
//     console.log(err);
// }


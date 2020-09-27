const mysql = require('mysql');
let db = mysql.createConnection({host:'localhost',port:3306,user:'root',password:'123456',database:'one'});

db.connect()
db.query('select * from `user_table`',(err,data) => {
    if(err){
        console.log('失败',err);
    } else {
        console.log('成功',data);
    }
})
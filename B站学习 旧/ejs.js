const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:'Bob'},function(err,data){
    console.log(err);
    console.log(data);
});
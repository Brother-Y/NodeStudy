const jade = require('jade');

let str = jade.renderFile('./build/jade4.jade',{pretty:true})

console.log(str);
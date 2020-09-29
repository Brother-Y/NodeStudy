const axios = require('axios')

axios.post('http://nodejs.cn/todos', {
    todo: '做点事情'
}).then(res => {
    console.log(`状态吗: ${res,.statusCode});`)
    console.log(res);
}

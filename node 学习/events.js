const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('开始');
})

eventEmitter.on('end', (start,end) => {
    console.log(`${start} 到 ${end}`);
})

eventEmitter.on('one', num => {
    console.log(`我是${num}`);
})

eventEmitter.emit('start')
eventEmitter.emit('one','参数')
eventEmitter.emit('end','开始','结束')

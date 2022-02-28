// 事件循环

// 事件驱动程序
// Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

// 当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

// 这个模型非常高效可扩展性非常强，因为 webserver 一直接受请求而不等待任何读写操作。（这也称之为非阻塞式IO或者事件驱动IO）

// 在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

var events = require("events")

// 创建事件机制
const eventEmitter = new events.EventEmitter()

// 创建自定义事件
const eventHandler = function () {
    console.log('连接成功----');

    eventEmitter.emit('data_received')
}

// 绑定事件
eventEmitter.on('eventName', eventHandler)

// 使用匿名函数 绑定事件
eventEmitter.on('data_received', function () {
    console.log('数据接受成功');
})

// 触发 eventName 事件
eventEmitter.emit('eventName')

console.log('程序执行完毕-');


// 创建事件机制
// on 绑定 事件
// emit 触发事件
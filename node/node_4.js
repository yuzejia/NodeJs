// eventEmitter

var events = require('events')

const eventEmitter = new events.EventEmitter();
// EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。

eventEmitter.on('some_event', function(arg1, arg2) {
    console.log('some_event 1 事件触发--', arg1, arg2);
})

eventEmitter.on('some_event', function(arg1, arg2) {
    console.log('some_event 2 事件触发--', arg1, arg2);
})

setTimeout(() => {
    eventEmitter.emit('some_event', 'arg1 参数', 'arg2 参数')
},2000)



// addListener  以下创建了 三个  addListe 事件的监听函数
eventEmitter.addListener('addListe', function() {
    console.log('addListe 触发111');
})

eventEmitter.on('addListe', function() {
    console.log('addListe 触发222');
})

const addliste3 = function() {
    console.log('addliste3 触发3333');
}
eventEmitter.on('addListe', addliste3)


eventEmitter.emit('addListe')

// listenerCount 返回指定事件的监听器数量
var eventListeners = eventEmitter.listenerCount('addListe');
console.log(eventListeners + " 个监听器监听连接事件。");


// 移除监绑定的 listener1 函数  移除 addListe 事件函数 addliste3
eventEmitter.removeListener('addListe', addliste3);
console.log("addliste3 不再受监听。");

eventListeners = eventEmitter.listenerCount('addListe');
console.log(eventListeners + " 个监听器监听连接事件。");


// error 事件
// EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

// 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。

eventEmitter.emit('hello')
eventEmitter.on('error',function(err) {
    console.log('error ----', err);
})

eventEmitter.emit('error', new Error('error --0000'))

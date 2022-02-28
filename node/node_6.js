// buffer (缓冲区)
// 但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

// 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
// 但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。

const a = Buffer.from([1,2,3])
console.log(a);
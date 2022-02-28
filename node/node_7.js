 // node stream (流) 

 // stream 是一个抽象的接口。node 中很多对象实现了这个接口。
 // node Stream 有四种流类型：
 // Readable  可读操作
 // writable  可写操作
 // Duplex    可读可写操作
 // Transfrom 操作被写入数据，然后读出结果


 // 从流中读取数据  createReadStream 创建一个可读流

 var fs = require("fs")
 var data = ""
 var readerStream = fs.createReadStream('input.txt')
 readerStream.setEncoding('UTF8')
 readerStream.on('data', function(chunk){
     data +=chunk;
 })

 readerStream.on('end',function() {
     console.log(data);
 })

 readerStream.on('error', function(err) {

     console.log(err.stack);
 })

 console.log('程序执行完毕');


 // 写入文件 createReadableStream 创建一个可写流

 const writeStream = fs.createWriteStream('onput.txt')
 writeStream.write('yuzejia', 'UTF8')

 // 标记文件末尾
 writeStream.end()

 // 处理流事件
 writeStream.on('finish', function() {
     console.log('写入完成~');
 })

 writeStream.on('error', function(err) {
     console.log(err.stack);
 })

 console.log('写入完毕');


 // 管道流 pipe

 // 创建一个可读流
 const read = fs.createReadStream('input.txt')

 // 创建写入流
 const write = fs.createWriteStream('onput.txt')

 read.pipe(write)

 console.log('pipe  执行完毕');

 // 链式流 压缩
 var zlib = require('zlib');

 const read2 = fs.createReadStream('input.txt');

 read2.pipe(zlib.createGzip())
 .pipe(fs.createWriteStream('onput.txt.gz'))

 // 链式流 解压

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('onput.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt')).on('error', function() {
      
  })
  
console.log("文件解压完成。");
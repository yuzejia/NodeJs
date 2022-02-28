// 文件操作

var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }

   console.log(fd);
  console.log("文件打开成功！");     
});

// 获取文件信息
// 语法
// 以下为通过异步模式获取文件信息的语法格式：
// fs.stat(path, callback)

// stats.isFile()	如果是文件返回 true，否则返回 false。
// stats.isDirectory()	如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	如果是 Socket 返回 true，否则返回 false。


// 截取文件
// 语法
// 以下为异步模式下截取文件的语法格式：

// fs.ftruncate(fd, len, callback)
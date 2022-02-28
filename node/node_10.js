// Node 全局 对象

// JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

// 在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

// __filename
// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。

console.log(__filename);

console.time("获取数据");
// setTimeout
function printHello() {
    console.log("Hello, World!");
}
// 两秒后执行以上函数
const t = setTimeout(printHello, 2000);

// 清除定时器
// clearTimeout(t);

console.timeEnd('获取数据');

console.info("程序执行完毕。")

// 两秒后执行以上函数
// setInterval(printHello, 2000);

// process
// process 是一个全局变量，即 global 对象的属性。

// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。

// exit
// 当进程准备退出时触发。

process.on('exit', function () {
    console.log('程序退出执行');
})

process.stdout.write('hello --11-')


// argv 属性返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
process.argv.forEach((val, index, array) => {
    console.log(val + '-==-' + index);
})

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
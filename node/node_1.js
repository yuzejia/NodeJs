// 创建第一个应用
const http = require("http");

http.createServer((request, response) => {
response.writeHead(200, {'content-type': 'text/plain'})

response.end('hello world\n')
}).listen(8000)

console.log('8000 success~~');
const request  = require('request') 
const fs = require('fs')
request('https://www.mabangerp.com/index.php?mod=common.go1688Similar&amp;imgUrl=aHR0cHM6Ly9hZTA0LmFsaWNkbi5jb20va2YvSGMxNzgzN2Q0MDE4MTQwZmJiNzIxZTdjYzllNGNhYzU0RC5qcGVn', function(err,data, body) {
    console.log(err);
    console.log(data);
    console.log(body);
//    const writeStream = fs.createWriteStream('./input.json')
//    writeStream.end()
 
})

https://show.1688.com/openplatform/recommend/sg77vgfr.html?targetUrl=https%3A%2F%2Fshow.1688.com%2Fopenplatform%2Frecommend%2Fsg77vgfr.html&token=981111ac-8bbd-4a95-87b0-7f7bdf4ee58f&searchKey=https%3A%2F%2Fae04.alicdn.com%2Fkf%2FH876d61a5b5fb4750806ba5deebe7b4eep.jpg
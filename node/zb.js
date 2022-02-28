const http = require("http")
const request  = require('request') 
http.createServer(async (res, req) => {
    req.writeHead(200, {'content-type': 'text/plain'})
    const data =  await getHttp()
    req.end(data)
}).listen(8000)


async function getHttp() {
    return new Promise((resolve, reject) => {
     request('http://www.cskj.sjedu.cn/data/jxky/jxyj/detail_699457.data?r=0.9813388453803804?random=102725934472305884', (err, data, body) => {
        resolve(body)
     })

    })
}
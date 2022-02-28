const http = require('http')
const url = require('url')

function start(route) {

    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname
        if(pathname != "/favicon.ico") {
            route(pathname, response);

        }
     
    }

    http.createServer(onRequest).listen(8000)
    console.log('localhost: 8000');
}

exports.start = start;

const fs = require('fs');

function route(pathname, response) {
    console.log("About to route a request for " + pathname);


    fs.readFile('.'+ pathname, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write(data.toString())
            response.end()
        }
    })
}


exports.route = route;
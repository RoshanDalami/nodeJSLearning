const http = require('http');

const hostname = '127.0.0.1' ;
const port = 5000;


http.createServer((request , respond)=>{
respond.writeHead(200,{'Content-Type': 'text/plain'});
respond.end('Hello World');
}).listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`)
})

const http = require('http');
const port = '5000'
const hostname = '127.0.0.1'
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html' , (error , data) =>{
        if(error){
            res.writeHead(404,{'Content-Type':'text/plane'});
            res.write('Error:File not found');
        }
        else{
            res.write(data);
        }
        res.end();
    });
})
server.listen(port , hostname , ()=>{
    console.log(`server is running ${hostname}:${port}`)
})

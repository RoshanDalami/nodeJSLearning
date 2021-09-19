const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'
const port = '3000'
const mineTypes = {
    html : 'text/html',
    css : 'text/css',
    js: 'text/javascript',
    png:'image/png',
    jpeg: 'image/jpeg',
jpg: 'image/jpg',
};

//respond always comes from server side and request always comes from website
let server = http.createServer((request,respond)=>{
    var myuri = url.parse(request.url).pathname   //parse the url to string  and with pathname which page is going to given to the user

    var filename = path.join(process.cwd(),unescape(myuri)) //join takes two parameter and join all given path segment "unescape" get rid of all the unwanted space 

    console.log(`File you are looking for is : ${filename}`)
    var loadfile;
    try {
        loadfile = fs.lstatSync(filename)
    } catch (error) {
        respond.writeHead(404 , {'Content-Type':'text/plane'});
        respond.write('404 page not found');
        respond.end();
        return ;
    }
    if(loadfile.isFile()){
        var mineTypes = mineTypes[path.extname(filename).split('.').reverse()[0]];
        respond.writeHead(200 ,{'Content-Type' : mineTypes});
        var filestream = fs.createReadStream(filename);
        filestream.pipe(respond)

    }else if(loadfile.isDirectory()){
        respond.writeHead(302,{'Location': 'index.html'});
        respond.end();
    }
    else
    {
        respond.writeHead(500,{'Content-Type':'text/plane'});
        respond.write('500 internal error')
        respond.end()
    }
});
 server.listen(port , hostname ,()=>{
     console.log(`server is running ${hostname}:${port}`)
 })
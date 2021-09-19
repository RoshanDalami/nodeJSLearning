const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000 ;

//line 9 - 18 copide from npm multer DiskStorage use to store the file uploaded by user

var storage = multer.diskStorage({
    destination: function(request,file,cb){
        cb(null,'./public/myupload');
    },
    filename: function(request , file,cb){
        cb(null,file.filename +'-'+Date.now()+path.extname(file.originalname));
    }
});
var upload = multer({
    storage:storage,
    
}).single('profilePic');


//set ejs
app.set('view engine','ejs');
//set static
app.use(express.static('./public'));
//desc
app.get('/',(request,response)=>{
   response.render('index')
});
app.post('/upload',(request,response)=>{
    upload(request,response,error =>{
        if(error){
            response.render('index',{
                message:error ,
            })
        }else{
            response.render('index',{
                message: 'sucessfully uploaded file...',
                filename : `myupload/${request.file.filename}`
            })
        }

    })
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
});
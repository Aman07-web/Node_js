const http=require('http');

const fs=require('fs');

http.createServer((req,res)=>{
   fs.readFile("./web.html","utf-8",(err,data)=>{
     if(err){
        res.writeHead(500,{"content-type":"text/plain"})
        console.log("Internal error");
       return;
     }
     else{
         res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end();
     }
   })
}).listen(4500,()=>{
    console.log("running on http://localhost:4500");
    
})
const { log } = require('console');

const http=require('http');
const fs=require('fs');
const user={
  name:"aman kumar",
  age:21
}

http.createServer((req,resp)=>{
  if(req.method==="GET" && req.url==="/user"){
    resp.writeHead(200,{"Content-Type": "application/json"});
    resp.write(JSON.stringify(user));
  }
  else if(req.method==="POST" && req.url==="/user"){
    let body="";
    req.on("data",(chunk)=>{
      body+=chunk;
    })
    req.on("end", ()=>{
     fs.writeFile("data.txt",body, ()=>{
      resp.writeHead(200)
      resp.end("done");
     })
    })
  
  }
  resp.end();
}).listen(3000,()=>{console.log("Server running on http://localhost:3000");
});
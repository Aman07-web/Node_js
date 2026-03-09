const http=require('http');
const fs=require('fs');
let user={
    name:"aman",
    age:23
};

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
    req.end("end", ()=>{
        fs.writeFile("aman.txt",data,()=>{
            resp.writeHead(200);
            resp.end("done");
        })
    })
  }
  resp.end();
}).listen(4000,()=>{console.log("server runs on http://localhost:4000")});
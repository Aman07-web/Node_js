const http=require("http");

http.createServer((req,resp)=>{
  resp.end("hello baby");
}).listen(4500,()=>{
    console.log("server : http://localhost:4500");
    
});
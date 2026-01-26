const http=require('http');

http.createServer((req,resp)=>{
  resp.write("hello node js");
  resp.end();
}).listen(4000);
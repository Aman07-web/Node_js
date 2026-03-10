const http=require("http");

http.createServer((req,resp)=>{
    if(req.url==="/"){
        resp.write("<h1>Home Page<h1>");
    }
    else if(req.url==="/login"){
        resp.write("<h1>Login page</h1>");
    }
    else{
        resp.write("<h1>other page</h1>");
    }
   resp.end();
}).listen(6600);
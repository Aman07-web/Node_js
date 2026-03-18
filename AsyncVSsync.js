const fs=require('fs');

fs.readFile("abc.txt","utf-8",(err,data))
    if(err){
        console.log("something went wrong");
        return false;
    }
    console.log(data);

console.log("Hii, Aman");

// const http=require('http');

// http.createServer(()=>{

// }).listen(5000);
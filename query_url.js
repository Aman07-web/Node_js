const http = require("http");
const url = require("url");

http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);  
    const queryData = parsedUrl.query;

    console.log(queryData); 
    res.end("Check console");

}).listen(5000);

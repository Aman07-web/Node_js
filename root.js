const http = require("http");
const userform = require('./userFrom');
const userdataSubmit = require('./userdataSubmit');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/" && req.method === "GET") {
        userform(req, resp);
    } 
    else if (req.url === "/userdataSubmit" && req.method === "POST") {
        userdataSubmit(req, resp);
    } 
    else {
        resp.write(`<h1>404 Page not found</h1>`);
        resp.end();
    }

}).listen(3200, () => {
    console.log("Server running on http://localhost:3200");
});
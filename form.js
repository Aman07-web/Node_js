const http = require('http');
const fs = require('fs');
const queryString=require('querystring');

http.createServer((req, resp) => {

    fs.readFile('html/from.html', 'utf-8', (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Something went wrong");
            return;
        }

        resp.writeHead(200, { "Content-Type": "text/html" });

        if (req.url === "/") {
            resp.write(data);
        }
        else if (req.url === "/submit") {
            resp.write('<h1>Data submitted successfully</h1>');
        }

        resp.end();
    });

}).listen(4500, () => {
    console.log("Server running on http://localhost:4500");
});

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (req.method === "GET" && pathname === "/") {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.end("Welcome to notes api");
  } 
  else if (req.method === "GET" && pathname === "/notes") {
    fs.readFile("notes.json", "utf8", (err, data) => {
      if (err) {
        resp.writeHead(500);
        resp.end("Error reading notes");
        return;
      }
      resp.writeHead(200, { "Content-Type": "application/json" });
      resp.end(data);
    });
  } 
  else {
    resp.writeHead(404, { "Content-Type": "text/plain" });
    resp.end("Route not found");
  }

}).listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const http = require("http");
const arg = process.argv;
const port = arg[2];

http.createServer((req, resp) => {
   resp.write("taking input from cmd");
   resp.end();
}).listen(port, () => {
   console.log(`Server running at http://localhost:${port}/`);
});
const http = require("http");



// http.createServer((req, resp) => {
//     resp.writeHead(200, {"Content-Type": "text/html"});
//     if (req.url === "/") {
//       resp.write(`
//       <form action="/submit" method="post">
//         <input type="text" placeholder="enter your name">
//         <input type="number" placeholder="enter your password">
//         <button>submit</button>
//       </form>
//     `);
//     } else if (req.url === "/submit") {
//       resp.write("Data send successfully");
//     }
//     resp.end();
//   })
//   .listen(5400, () => {
//     console.log("server run on http://localhost:5400");
//   });

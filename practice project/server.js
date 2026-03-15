const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // GET request → data read from JSON
    if (req.method === "GET" && req.url === "/tasks") {

        fs.readFile("data.json", "utf8", (err, data) => {
            if (err) {
                res.end("Error reading file");
                return;
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });
    }

    // POST request → add new task
    else if (req.method === "POST" && req.url === "/tasks") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const newTask = JSON.parse(body);

            fs.readFile("data.json", "utf8", (err, data) => {

                let tasks = JSON.parse(data); // existing array

                tasks.push(newTask); // new data add

                fs.writeFile("data.json", JSON.stringify(tasks, null, 2), err => {

                    if (err) {
                        res.end("Error writing file");
                        return;
                    }

                    res.writeHead(201, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: "Task added" }));
                });

            });

        });
    }

    else {
        res.end("Route not found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
const fs = require("fs");

const command = process.argv[2];
const task = process.argv[3];
const file = "todo.txt";

// Add Task
if (command === "add") {
    fs.appendFileSync(file, task + "\n");
    console.log("Task added:", task);
}

// View Tasks
else if (command === "list") {
    const data = fs.readFileSync(file, "utf-8");
    console.log("Your Tasks:");
    console.log(data);
}

// Delete Task
else if (command === "delete") {
    let data = fs.readFileSync(file, "utf-8").split("\n");

    data = data.filter(t => t !== task && t !== "");

    fs.writeFileSync(file, data.join("\n"));
    console.log("Task deleted:", task);
}

// Help
else {
    console.log("Commands:");
    console.log("node todo.js add 'task name'");
    console.log("node todo.js list");
    console.log("node todo.js delete 'task name'");
}
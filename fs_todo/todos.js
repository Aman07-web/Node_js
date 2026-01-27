const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "todos.json");

/* ---------- Helper Functions ---------- */

function readTodos() {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data || "[]");
}

function writeTodos(todos) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

/* ---------- Add Todo ---------- */

function addTodo(task) {
  if (!task) {
    console.log("⚠ Please provide a task!");
    return;
  }

  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    task: task,
    done: false,
  };

  todos.push(newTodo);
  writeTodos(todos);

  console.log("✅ Todo added!");
}

/* ---------- List Todos ---------- */

function listTodos() {
  const todos = readTodos();

  if (todos.length === 0) {
    console.log("📭 No todos found!");
    return;
  }

  console.log("\n📋 Your Todos:\n");
  todos.forEach((todo, index) => {
    const status = todo.done ? "✔" : "❌";
    console.log(`${index + 1}. ${status} ${todo.task}`);
  });
}

/* ---------- Mark Todo as Done ---------- */

function markDone(index) {
  const todos = readTodos();

  if (!todos[index - 1]) {
    console.log("⚠ Invalid todo number!");
    return;
  }

  todos[index - 1].done = true;
  writeTodos(todos);

  console.log("🎉 Todo marked as done!");
}

/* ---------- Delete Todo ---------- */

function deleteTodo(index) {
  const todos = readTodos();

  if (!todos[index - 1]) {
    console.log("⚠ Invalid todo number!");
    return;
  }

  const removed = todos.splice(index - 1, 1);
  writeTodos(todos);

  console.log(`🗑 Deleted: ${removed[0].task}`);
}

/* ---------- Command Handling ---------- */

const command = process.argv[2];
const value = process.argv[3];

switch (command) {
  case "add":
    addTodo(value);
    break;

  case "list":
    listTodos();
    break;

  case "done":
    markDone(Number(value));
    break;

  case "delete":
    deleteTodo(Number(value));
    break;

  default:
    console.log(`
📌 Commands:

node index.js add "Task name"
node index.js list
node index.js done 1
node index.js delete 1
    `);
}

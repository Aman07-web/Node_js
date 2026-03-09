const path=require("path");

//const info = path.parse("/users/abhi/file.txt");console.log(info);

const filePath=path.join("user","aman","cricket.txt");
console.log(filePath);

const parsePath=path.parse(filePath);
const extPath=path.extname(filePath);
const resolve=path.resolve(filePath);
const dirPath=path.dirname(filePath);
const baseName=path.basename(filePath);

console.log({parsePath,extPath,resolve,dirPath,baseName});

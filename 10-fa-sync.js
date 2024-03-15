const { readFileSync, writeFileSync } = require("fs");
console.log('start');
// read files
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// write file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } // causes node to append
);
console.log('done with this task');
console.log('starting the next one');

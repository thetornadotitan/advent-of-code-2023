const fs = require("fs");
const path = require("path");

const inputFile = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");
const inputLines = inputFile.split("\n");
sum = 0;

inputLines.forEach((line, idx) => {
  first = null;
  second = null;

  for (let x = 0; x < inputLines.length; x++) {
    if (Number(line[x])) {
      first = Number(line[x]);
      break;
    }
  }

  for (let x = inputLines.length - 1; x >= 0; x--) {
    if (Number(line[x])) {
      second = Number(line[x]);
      break;
    }
  }

  console.log(`${idx} f: ${first} s: ${second}`);
  sum += Number(`${first}${second}`);
});

console.log(`Sum: ${sum}`);

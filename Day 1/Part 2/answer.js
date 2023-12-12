const fs = require("fs");
const path = require("path");

const inputFile = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");
const inputLines = inputFile.split("\n");
sum = 0;

inputLines.forEach((line, idx) => {
  first = FindStartingNumber(line);
  second = FindEndingNumber(line);
  console.log(`${idx}: ${first} -- ${second}\n${line}\n`);
  sum += Number(`${first}${second}`);
});
console.log(`Sum: ${sum}`);

function FindStartingNumber(s) {
  if (s.length < 1) return null;
  if (s.startsWith("1")) return 1;
  if (s.startsWith("2")) return 2;
  if (s.startsWith("3")) return 3;
  if (s.startsWith("4")) return 4;
  if (s.startsWith("5")) return 5;
  if (s.startsWith("6")) return 6;
  if (s.startsWith("7")) return 7;
  if (s.startsWith("8")) return 8;
  if (s.startsWith("9")) return 9;
  if (s.startsWith("one")) return 1;
  if (s.startsWith("two")) return 2;
  if (s.startsWith("three")) return 3;
  if (s.startsWith("four")) return 4;
  if (s.startsWith("five")) return 5;
  if (s.startsWith("six")) return 6;
  if (s.startsWith("seven")) return 7;
  if (s.startsWith("eight")) return 8;
  if (s.startsWith("nine")) return 9;
  return FindStartingNumber(s.substring(1));
}

function FindEndingNumber(s) {
  if (s.length < 1) return null;
  if (s.endsWith("1")) return 1;
  if (s.endsWith("2")) return 2;
  if (s.endsWith("3")) return 3;
  if (s.endsWith("4")) return 4;
  if (s.endsWith("5")) return 5;
  if (s.endsWith("6")) return 6;
  if (s.endsWith("7")) return 7;
  if (s.endsWith("8")) return 8;
  if (s.endsWith("9")) return 9;
  if (s.endsWith("one")) return 1;
  if (s.endsWith("two")) return 2;
  if (s.endsWith("three")) return 3;
  if (s.endsWith("four")) return 4;
  if (s.endsWith("five")) return 5;
  if (s.endsWith("six")) return 6;
  if (s.endsWith("seven")) return 7;
  if (s.endsWith("eight")) return 8;
  if (s.endsWith("nine")) return 9;
  return FindEndingNumber(s.substring(0, s.length - 1));
}

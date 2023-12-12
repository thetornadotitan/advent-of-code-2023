const fs = require("fs");
const path = require("path");

const inputFile = fs.readFileSync(path.join(__dirname, "./input.txt"), "utf8");
const inputLines = inputFile.split("\n");

// The Elf would first like to know which games would have been possible if the bag contained only
// 12 red cubes
// 13 green cubes
// 14 blue cubes

const maxr = 12;
const maxg = 13;
const maxb = 14;
sum = 0;

inputLines.forEach((game, idx) => {
  isPossible = GamePossible(game);
  if (isPossible) {
    sum += idx+1;
    console.log(`${idx}: ${isPossible}`);
    console.log(game);
  }
});
console.log(sum);

function GamePossible(game) {
  let allHands = game.split(":")[1];
  let hands = allHands.split(";");
  goodGame = true;
  hands.forEach((hand) => {
    let r = 0;
    let g = 0;
    let b = 0;
    let dice = hand.split(",");
    dice.forEach((die) => {
      die = die.trim();
      if (die.endsWith("red")) r += Number(die.match("\\d+"));
      if (die.endsWith("green")) g += Number(die.match("\\d+"));
      if (die.endsWith("blue")) b += Number(die.match("\\d+"));
    });
    if (r > maxr || g > maxg || b > maxb) goodGame = false;
  });
  return goodGame;
}

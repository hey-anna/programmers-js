// 직각삼각형 출력하기

// 입력: 정수 n
// 출력: 높이와 너비가 n인 직각 이등변 삼각형

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let out = "";

  for (let i = 1; i <= num; i++) {
    out += "*".repeat(i) + "\n";
  }

  console.log(out.trimEnd());
});

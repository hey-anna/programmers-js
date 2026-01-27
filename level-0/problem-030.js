// 외계행성의 나이

// 숫자로 된 나이를 알파벳으로 변환하는 문제
// 규칙: 0 → a, 1 → b, … , 9 → j
// 예) 23 → "cd", 51 → "fb"

const solution = (age) => {
  const alphabet = "abcdefghij";

  return age
    .toString()
    .split("")
    .map((num) => alphabet[num])
    .join("");
};

const solution1 = (age) => {
  const alphabet = "abcdefghij";
  let result = "";
  for (const num of age.toString()) {
    result += alphabet[num];
  }
  return result;
};

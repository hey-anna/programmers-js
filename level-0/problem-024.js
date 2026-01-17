// 문자 반복 출력하기

// 입력: 문자열 my_string, 정수 n
// 출력: 각 문자를 n번 반복해 이어붙인 문자열

// for + index
const solution = (my_string, n) => {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    result += my_string[i].repeat(n);
  }
  return result;
};

// for...of
const solution2 = (my_string, n) => {
  let result = "";
  for (const ch of my_string) {
    result += ch.repeat(n);
  }
  return result;
};

// reduce
const solution1 = (my_string, n) =>
  [...my_string].reduce((acc, ch) => acc + ch.repeat(n), "");

// map + join
const solution0 = (my_string, n) =>
  my_string
    .split("")
    .map((ch) => ch.repeat(n))
    .join("");

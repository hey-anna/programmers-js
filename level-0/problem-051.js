// 중복된 문자 제거
// 매개변수 = 문자열 my_string
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return

const solution = (my_string) => [...new Set(my_string)].join("");

const solution1 = (my_string) =>
  [...my_string].filter((char, idx, arr) => arr.indexOf(char) === idx).join("");

const solution2 = (my_string) => {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!result.includes(my_string[i])) result += my_string[i];
  }
  return result;
};

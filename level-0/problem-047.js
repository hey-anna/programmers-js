// 숨어있는 숫자의 덧셈

// 매개변수 = my_string
// my_string 안의 모든 자연수들의 합을 return

// 문자열에서 숫자 문자만 골라 모두 더하기/

// 방법 1. split + filter + reduce
const solution = (my_string) => {
  return my_string
    .split("")
    .filter((char) => char >= "0" && char <= "9")
    .reduce((sum, char) => sum + Number(char), 0);
};

// 방법 2. for문 + isNaN
const solution1 = (my_string) => {
  let result = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      result += Number(my_string[i]);
    }
  }
  return result;
};

// 방법 3. for...of + isNaN
const solution2 = (my_string) => {
  let result = 0;

  for (const char of my_string) {
    if (!isNaN(char)) {
      result += Number(char);
    }
  }
  return result;
};

// 방법 4. match + reduce
const solution4 = (my_string) => {
  const numbers = my_string.match(/[0-9]/g) || [];
  return numbers.reduce((sum, num) => sum + Number(num), 0);
};

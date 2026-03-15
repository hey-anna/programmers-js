// 문자열 정렬하기

// 매개변수 = my_string
// my_string 숫자만 골라 오름차순 정렬한 리스트를 return

// 방법 1. isNaN 사용
const solution = (my_string) => {
  const result = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      result.push(Number(my_string[i]));
    }
  }

  return result.sort((a, b) => a - b);
};

// 방법 2. 문자 비교 사용
const solution2 = (my_string) => {
  const result = [];

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] >= "0" && my_string[i] <= "9") {
      result.push(Number(my_string[i]));
    }
  }
  return result.sort((a, b) => a - b);
};

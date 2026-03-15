// 모음 제거

// 모음 = a, e, i, o, u
// 모음을 제거한 문자열 return

// 방법 1. includes 사용
const solution = (my_string) => {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    if (!"aeiou".includes(my_string[i])) {
      result += my_string[i];
    }
  }
  return result;
};

// 방법 2. 이중 for문 사용
const solution2 = (my_string) => {
  const moum = "aeiou".split("");
  let arr = my_string.split("");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let isMoum = false;

    for (let j = 0; j < moum.length; j++) {
      if (arr[i] === moum[j]) {
        isMoum = true;
      }
    }

    if (!isMoum) {
      result += arr[i];
    }
  }
  return result;
};

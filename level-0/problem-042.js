// 합성수 찾기

// 합성수 : 약수의 개수가 세개 이상인 수
// 매개변수 : n

// n 이하의 합성수의 개수를 return 하기

const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= n; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) {
      result++;
    }
  }
  return result;
};

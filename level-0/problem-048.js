//  소인수 분해

// 소인수 분해: 어떤 수를 소수들의 곱으로 표현한 것
// 예) 12 = 2 * 2 * 3
// 12의 소인수는 2, 3

// 매개변수 n
// n의 소인수를 오름차순으로 담은 배열 return

// 2부터 차례대로 나누면서 소인수를 구한다.
// 나누어떨어지면 해당 수를 배열에 담고, n을 그 수로 나눈다.
// 마지막에 중복을 제거해 반환한다.

// 방법 1. Set 사용
const solution = (n) => {
  let result = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result.push(i);
      n = n / i;
    }
  }
  return [...new Set(result)];
};

// 방법 2. filter + indexOf 사용
const solution2 = (n) => {
  let result = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result.push(i);
      n = n / i;
    }
  }
  return result.filter((item, index) => result.indexOf(item) === index);
};

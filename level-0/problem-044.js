// 팩토리얼

// i 팩토리얼(i!) = 1 * i까지 정수의 곱을 의미
// 예) 5! = 5 * 4 * 3 * 2 * 1 = 120

// 조건 : i! ≤ n

const solution = (n) => {
  let fac = 1;

  for (let i = 1; i <= 10; i++) {
    fac *= i;
    if (fac > n) {
      return i - 1;
    }
  }
  return 10;
};

// 다른 사람 풀이
const solution2 = (n) => {
  let answer = 1;
  let a = 0;
  while (answer <= n) {
    a++;
    answer *= a;
  }
  return a - 1;
};

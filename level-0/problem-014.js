// 피자 나눠 먹기 (2)

// 1) while
const solutionWhile = (n) => {
  let k = 1;
  while ((6 * k) % n !== 0) {
    k++;
  }
  return k;
};

// 2) for
const solutionFor = (n) => {
  for (let i = 1; ; i++) {
    if ((6 * i) % n === 0) {
      return i;
    }
  }
};

//3) gcd 최대공약수
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const solution = (n) => n / gcd(6, n);

// b가 0이 아닐 동안,
// a를 b로 나눈 나머지를
// 다음 b로 넘겨라

// n = 10
// gcd(6, 10)

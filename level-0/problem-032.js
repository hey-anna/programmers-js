// 순서쌍의 개수

// 두 자연수 (a, b)의 곱이 n이 되는 순서쌍의 개수를 구한다.
// 순서쌍이므로 (a, b)와 (b, a)는 서로 다른 쌍으로 센다.

const solution = (n) => {
  let count = 0;

  // 약수는 쌍으로 존재하므로 1부터 √n까지만 확인
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count += i === n / i ? 1 : 2;
    }
  }

  return count;
};

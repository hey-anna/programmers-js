// 짝수의 합

// 정수 n이 주어질 때, n 이하의 짝수들의 합을 return

// 전체를 순회하며 짝수만 더하는 방식
// 성능 3 : 상대적으로 느림 (조건문 포함)
const solution = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
};

// 짝수만 직접 순회하는 방식 (조건문 제거)
// 성능 2 : 개선됨 / 가독성·안정성 우수
const solution1 = (n) => {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
};

// 반복문 없이 계산하는 방식
// - n 이하의 짝수 개수를 이용해 합을 계산
// 성능 1 : 가장 우수함 (O(1))
const solution2 = (n) => {
  const k = Math.floor(n / 2);
  return k * (k + 1);
};

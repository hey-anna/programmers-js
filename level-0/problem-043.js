// 최댓값 만들기

// 매개변수 = 정수 배열 numbers
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

const solution = (numbers) => {
  const arr = numbers.sort((a, b) => a - b);
  const a = arr[0] * arr[1];
  const b = arr[arr.length - 1] * arr[arr.length - 2];

  return Math.max(a, b);
};

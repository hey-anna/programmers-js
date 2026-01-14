// 배열의 평균값

// for문 기반
const solution = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

// reduce 사용 (배열 메서드 활용)
const solution1 = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

// 짝수 홀수 개수

// 정수가 들어있는 배열 num_list
// 짝수 개수와 홀수 개수를 담은 배열을 반환

// for문
const solution = (num_list) => {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return [even, odd];
};

// filter + length
// filter로 새 배열을 만들고
// 그 배열에 .length를 붙이면
// 그 배열의 길이(= 개수)가 값
const solution1 = (num_list) => [
  num_list.filter((v) => v % 2 === 0).length,
  num_list.filter((v) => v % 2 === 1).length,
];

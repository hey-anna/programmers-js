// 배열 뒤집기 - reverse, for, map, two-pointer

// 정수가 들어 있는 배열 = num_list
// num_list 순서를 거꾸로 뒤집은 배열 return

// const solution = (num_list) => num_list.reverse();
// const solution1 = (num_list) => [...num_list].reverse();
// - reverse()는 원본 배열을 변경(mutate)함
// - 원본 보존이 필요한 경우 [...num_list].reverse() 사용 가능

// for 문
// - 마지막 인덱스부터 앞으로 순회

const solution = (num_list) => {
  const result = [];

  for (let i = num_list.length - 1; i >= 0; i--) {
    result.push(num_list[i]);
  }
  return result;
};

// map + index
// - map은 원본과 같은 길이의 새 배열을 생성
// - i는 0부터 증가
// - (length - 1 - i)로 뒤에서부터 접근

const solution1 = (num_list) =>
  num_list.map((_, i, arr) => arr[arr.length - 1 - i]);

// 투 포인터 알고리즘
// - 양쪽 끝에서 가운데로 수렴하며 swap
// - 원본 배열 보존
const solution2 = (num_list) => {
  let left = 0;
  let right = num_list.length - 1;
  const arr = [...num_list];

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
};

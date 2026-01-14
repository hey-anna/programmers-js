// 짝수는 싫어요 - 홀수 배열 생성 방식 비교 (for, filter, Array.from, reduce)

// 요구사항
// - n 이하의
// - 홀수만
// - 오름차순으로
// - 담긴 배열을 return
//
// 접근 방법
// - "조건(홀수)만 남기기"라면 filter가 자연스럽다
// - 하지만 이 문제는 애초에 "홀수만 생성"할 수 있음
// - 따라서 for문에서 i += 2 방식이 가장 효율적

// 1) for (i += 2)
// - 필요한 홀수만 바로 생성
// - 반복 횟수와 메모리 사용이 가장 적음 (최적)
function solutionForLoop(n) {
  const result = [];

  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }

  return result;
}

// 2) for + filter
// - 1 ~ n까지 배열을 만든 뒤
// - filter로 홀수만 걸러냄
// - 개념 이해용으로는 좋지만 중간 배열이 생김
const solutionWithFilter = (n) => {
  const arr = [];

  for (let i = 1; i <= n; i++) arr.push(i);

  const newArr = arr.filter((num) => num % 2 === 1);

  return newArr;
};

// 3) Array.from + filter
// - Array.from으로 1 ~ n 배열 생성
// - filter로 홀수만 남김
// - 배열 생성 패턴 연습용
function solutionWithArrayFrom(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((v) => v % 2 === 1);
}

// 4) reduce
// - filter 역할을 reduce로 직접 구현
// - 가능은 하지만 가독성은 떨어짐
// - reduce 개념 이해용
function solutionWithReduce(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => {
    if (cur % 2 === 1) acc.push(cur);
    return acc;
  }, []);
}

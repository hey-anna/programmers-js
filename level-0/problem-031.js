// 진료순서 정하기

// 응급도가 높을수록 우선 순위가 높은 문제
// 각 환자의 응급도를 기준으로 진료 순서를 배열로 반환
// (1이 가장 높은 우선 순위)

// 예) [3, 76, 24] → [3, 1, 2]

const solution = (emergency) => {
  const sorted = [...emergency].sort((a, b) => b - a);
  const result = emergency.map((x) => sorted.indexOf(x) + 1);
  return result;
};

// 원본 배열을 복사한 뒤, 응급도 기준으로 내림차순 정렬
// 원래 배열을 기준으로 순회하며
// 정렬된 배열에서의 위치(index)를 이용해 순위 계산

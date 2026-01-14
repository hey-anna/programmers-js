// 최빈값 구하기

// 방법 1: for문 기반 구현
// 1) 배열에 담긴 숫자들의 빈도수 계산
// 2) 가장 큰 빈도수(maxCount) 구하기
// 3) maxCount를 가진 값이 몇 개인지 검증
//    - 최빈값이 2개 이상이면 -1 반환
//    - 1개면 해당 숫자 반환
//
// 정리
// - 객체의 value → 빈도수
// - 객체의 key → 실제 최빈값(배열에 들어 있던 숫자)

const solution = (array) => {
  const count = {};

  // 1) 숫자별 빈도수 세기
  for (const num of array) {
    count[num] = (count[num] || 0) + 1;
  }

  // 2) 최대 빈도수 찾기
  let maxCount = 0;
  for (const key in count) {
    if (count[key] > maxCount) maxCount = count[key];
  }

  // 3) 최대 빈도수를 가진 값이 몇 개인지 확인
  let mode = -1; // 아직 유효한 최빈값이 없음
  // let mode = null;
  let modeCount = 0; // 최빈값 후보 개수

  for (const key in count) {
    if (count[key] === maxCount) {
      mode = Number(key); // key는 문자열이므로 숫자로 변환
      modeCount += 1;

      // 최빈값이 2개 이상이면 즉시 -1 반환
      if (modeCount > 1) return -1;
    }
  }

  // 최빈값이 1개인 경우 해당 숫자 반환
  return mode; // 최빈값(=최대 빈도수를 가진 숫자)이 1개면 그 숫자 반환
};

// 방법 2: Object + Math.max 기반 구현
// 1) 빈도수 세기
// 2) 최대 빈도수(max) 구하기
// 3) max와 같은 빈도수를 가진 key들만 골라서 modes 배열 생성(필터)
// 4) modes가 1개면 그 숫자 반환, 아니면 -1 반환

const solution2 = (array) => {
  const count = {};
  array.forEach((n) => (count[n] = (count[n] || 0) + 1));

  const max = Math.max(...Object.values(count));
  const modes = Object.keys(count).filter((k) => count[k] === max);

  return modes.length === 1 ? Number(modes[0]) : -1;
};

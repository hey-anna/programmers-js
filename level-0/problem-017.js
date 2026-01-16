// 옷가게 할인 받기

// 50만원 이상 20% 할인
// 30만원 이상 10% 할인
// 10만원 이상 5% 할인
// Price는 10원 단위로 1의 자리가 0

// 1️⃣ 기본 풀이 (if / else if)
// - 가장 직관적인 방식
// - 코딩 테스트에서 흔히 쓰이는 형태
const solution = (price) => {
  let rate = 0;

  if (price >= 500000) rate = 0.2;
  else if (price >= 300000) rate = 0.1;
  else if (price >= 100000) rate = 0.05;

  return Math.floor(price * (1 - rate));
};

// 2️⃣ 객체 맵 방식
// - 할인 정책이 데이터로 관리될 때 유용
// - 실무에서 확장성과 유지보수에 강점
const discountRules = [
  { min: 500000, rate: 0.2 },
  { min: 300000, rate: 0.1 },
  { min: 100000, rate: 0.05 },
];

const solution1 = (price) => {
  const rule = discountRules.find((r) => price >= r.min);
  return Math.floor(price * (1 - (rule?.rate ?? 0)));
};

// 3️⃣ switch(case) 방식
// - 가능은 하지만 범위 조건에는 권장하지 않음
// - switch(true) 패턴 학습 목적
const solution2 = (price) => {
  let rate = 0;

  switch (true) {
    case price >= 500000:
      rate = 0.2;
      break;
    case price >= 300000:
      rate = 0.1;
      break;
    case price >= 100000:
      rate = 0.05;
      break;
    default:
      rate = 0;
  }
  return Math.floor(price * (1 - rate));
};

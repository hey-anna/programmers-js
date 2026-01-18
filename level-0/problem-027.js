// 양꼬치

// 양꼬치 1인분 = 12,000원
// 음료 1개 = 2,000원
// 양꼬치 10인분당 음료 1개 무료

// 정수 n과 k가 매개변수로 주어질 때
// 양꼬치 n인분과 음료 k개를 먹었다면
// 총 금액을 return

const solution = (n, k) => n * 12000 + (k - Math.floor(n / 10)) * 2000;

// const solution1 = (n, k) => {
//   const freeDrink = Math.floor(n / 10);
//   return n * 12000 + (k - freeDrink) * 2000;
// };

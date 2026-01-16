// 아이스 아메리카노

// 아메리카노 한잔 = 5500원
// 머쓱이 돈 = money
// 최대로 마실 수 있는 잔수와 남은 돈 순서대로 담은 배열 리턴 하기

const solution = (money) => {
  const price = 5500;
  return [Math.floor(money / price), money % price];
};

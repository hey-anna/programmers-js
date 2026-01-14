// 중앙값 구하기

const solution = (array) => {
  sortArr = array.sort((a, b) => a - b);
  middleIndex = Math.floor(sortArr.length / 2);
  return sortArr[middleIndex];
};

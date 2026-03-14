// 주사위의 개수

// 매개변수
// box: 상자의 가로, 세로, 높이가 들어있는 길이 3의 배열
// n: 주사위 한 변의 길이

// 해야 하는 일
// box에 들어 있는 상자 크기와 n을 이용해서
// 상자 안에 들어갈 수 있는 정육면체 주사위의 최대 개수를 구하기

const solution = (box, n) => {
  const width = Math.floor(box[0] / n);
  const height = Math.floor(box[1] / n);
  const depth = Math.floor(box[2] / n);

  return width * depth * height;
};

// 다른 사람 풀이
const solution2 = (box, n) => {
  let [width, height, depth] = box;

  return Math.floor(width / n) * Math.floor(height / n) * Math.floor(depth / n);
};

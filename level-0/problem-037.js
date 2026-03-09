// 점의 위치 구하기

// [문제 정리]
// x, y 좌표의 부호를 보고 점이 몇 사분면에 속하는지 판단한다.
// - x > 0, y > 0 : 1사분면
// - x < 0, y > 0 : 2사분면
// - x < 0, y < 0 : 3사분면
// - x > 0, y < 0 : 4사분면

// [내 풀이]
// x와 y가 각각 양수/음수인지 조건문으로 확인해서 사분면을 반환한다.
const solution = (dot) => {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
};

// [참고 풀이 1]
// x * y > 0 이면 두 수의 부호가 같으므로 1사분면 또는 3사분면
// x * y < 0 이면 두 수의 부호가 다르므로 2사분면 또는 4사분면
function solutionRef1(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;

  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// [참고 풀이 2]
// x를 먼저 기준으로 나누고,
// 그 안에서 y가 양수인지 음수인지 다시 판단하는 삼항 연산자 방식
function solutionRef2(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

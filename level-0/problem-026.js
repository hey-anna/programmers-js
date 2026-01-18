// 각도기

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

// angle = 매개변수로
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return

// if
const solution = (angle) => {
  if (angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  return 4; // angle === 180
};

// 삼항 연산자
const solutionTernary = (angle) =>
  angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;

// switch 문
const solutionSwitch = (angle) => {
  switch (true) {
    case angle < 90:
      return 1;
    case angle === 90:
      return 2;
    case angle < 180:
      return 3;
    case angle === 180:
      return 4;
  }
};

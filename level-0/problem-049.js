// 컨트롤 제트

// 공백으로 구분된 숫자와 "Z"가 들어 있는 문자열 s가 주어집니다.
// 문자열을 앞에서부터 순서대로 보면서 숫자는 더하고,
// "Z"가 나오면 바로 직전에 더했던 숫자를 취소합니다.
//
// 최종적으로 남아 있는 숫자들의 합을 return 하도록 solution 함수를 완성하세요.

const solution = (s) => {
  const sp = s.split(" ");
  let arr = [];

  for (let i = 0; i < sp.length; i++) {
    if (sp[i] === "Z") {
      arr.pop();
    } else {
      arr.push(Number(sp[i]));
    }
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

const solution1 = (s) => {
  let arr = [];
  for (let v of s.split(" ")) {
    if (v === "Z") arr.pop();
    else arr.push(Number(v));
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const solution2 = (s) => {
  const tokens = s.split(" ");
  const arr = [];
  let idx = 0;

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "Z") {
      // idx-- 는 값을 직접 지우는 것이 아니라
      // "유효한 값의 범위"를 한 칸 줄이는 역할을 합니다.
      // 그래서 이전 값이 배열 칸에 남아 있을 수 있으므로
      // 마지막 합계 계산은 arr.length 가 아니라 idx 기준으로 해야 합니다.
      idx--;
    } else {
      // 현재 idx 위치에 값을 넣고
      // 다음에 들어갈 위치를 한 칸 뒤로 이동
      arr[idx] = Number(tokens[i]);
      idx++;
    }
  }
  let sum = 0;
  // 배열 전체 길이를 도는 것이 아니라
  // 실제로 유효한 값이 들어 있는 idx 전까지만 합산
  for (let i = 0; i < idx; i++) {
    sum += arr[i];
  }
  return sum;
};

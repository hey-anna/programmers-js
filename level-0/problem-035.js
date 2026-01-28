// 가위 바위 보

// 가위 2
// 바위 0
// 보 5

// 입력된 rsp 문자열을 순회하며
// 각 값에 대해 이기는 경우를 문자열로 반환한다.

// map + join을 이용한 함수형 풀이
const solution = (rsp) =>
  rsp
    .split("")
    .map((v) => (v === "2" ? "0" : v === "0" ? "5" : "2"))
    .join("");

// for문을 이용한 기본 반복문 풀이
const solution1 = (rsp) => {
  const arr = rsp.split("");

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "2") result += "0";
    else if (arr[i] === "0") result += "5";
    else result += "2";
  }
  return result;
};

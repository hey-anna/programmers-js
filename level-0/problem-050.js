// 배열 원소의 길이

// 매개 변수 = 문자열 배열 strlist
// strlist 각 원소의 길이를 담은 배열을 return

// 방법 1: map 사용
const solution = (strlist) => strlist.map((v) => v.length);

// 방법 1: map 사용
const solution2 = (strlist) => {
  const arr = [];
  for (let i = 0; i < strlist.length; i++) {
    arr.push(strlist[i].length);
  }
  return arr;
};

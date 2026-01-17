// 뒤집힌 문자열

// my_string = 매개변수
// 거꾸로 뒤집은 문자열 return

// 1. split + reverse (대표 풀이)
const solution = (my_string) => my_string.split("").reverse().join("");

// 2. spread (split 대안)
// - iterable
// - split 대체
const solution0 = (my_string) => [...my_string].reverse().join("");

// 3. for문 (기본기)
const solution1 = (my_string) => {
  let result = "";

  for (let i = my_string.length - 1; i >= 0; i--) {
    result += my_string[i];
  }
  return result;
};

// 4. reduce (개념 연습)
// - 실무에선 가독성/성능 때문에 거의 안 씀
const solution2 = (my_string) =>
  my_string.split("").reduce((acc, cur) => cur + acc, "");

// 5. two pointer (알고리즘)
const solution3 = (my_string) => {
  const arr = my_string.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};

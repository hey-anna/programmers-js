// 특정 문자 제거하기
// my_string에서 letter를 제거한 문자열을 return

// for...of
// - 문자열은 iterable이므로 for...of로 순회 가능
// - 조건이 많거나 로직이 복잡할 때 유리 (성능 우수)

const solution = (my_string, letter) => {
  let result = "";
  for (const ch of my_string) {
    if (ch !== letter) result += ch;
  }
  return result;
};

// replaceAll
// - 엔진 내부 최적화
// - for...of와 성능 차이 거의 없음
// - 가독성이 가장 좋음
// my_string에서 letter에 해당하는 모든 문자를 "" (빈 문자열)로 바꾼다
const solution1 = (my_string, letter) => my_string.replaceAll(letter, "");

// split + filter + join
// - 학습용으로 이해하기 쉬움
// - 배열 생성으로 인해 성능은 상대적으로 불리
const solution2 = (my_string, letter) =>
  my_string
    .split("")
    .filter((v) => v !== letter)
    .join("");

// 배열 회전시키기

// direction이 "right"면 배열의 마지막 값을 꺼내 맨 앞에 넣는다.
// direction이 "left"면 배열의 첫 번째 값을 꺼내 맨 뒤에 넣는다.

function solution(numbers, direction) {
  if (direction === "right") {
    const last = numbers.pop();
    numbers.unshift(last);
  } else {
    const first = numbers.shift();
    numbers.push(first);
  }
  return numbers;
}

// 메서드 없이 정리한 풀이
// direction이 "right"면 마지막 값을 맨 앞으로 보내고,
// 나머지 값들은 한 칸씩 뒤로 민다.

// direction이 "left"면 첫 번째 값을 맨 뒤로 보내고,
// 나머지 값들은 한 칸씩 앞으로 당긴다.

const solution = (numbers, direction) => {
  const result = [];

  if (direction === "right") {
    result[0] = numbers[numbers.length - 1];

    for (let i = 0; i < numbers.length - 1; i++) {
      result[i + 1] = numbers[i];
    }
  } else {
    for (let i = 1; i < numbers.length; i++) {
      result[i - 1] = numbers[i];
    }

    result[numbers.length - 1] = numbers[0];
  }

  return result;
};

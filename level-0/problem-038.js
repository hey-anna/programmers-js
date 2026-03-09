// 2차원으로 만들기

// num_list를 앞에서부터 n개씩 잘라
// 2차원 배열로 만들어 반환한다.

const solution = (num_list, n) => {
  const result = [];

  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list.slice(i, i + n));
  }
  return result;
};

// 분수의 덧셈

const solution = (numer1, denom1, numer2, denom2) => {
  const newNumer = numer1 * denom2 + numer2 * denom1;
  const newDenom = denom1 * denom2;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdValue = gcd(newNumer, newDenom);
  return [newNumer / gcdValue, newDenom / gcdValue];
};

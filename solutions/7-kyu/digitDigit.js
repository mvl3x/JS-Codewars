function squareDigits(num) {
  let result = "";
  const n = num.toString();

  for (let i = 0; i < n.length; i++) {
    result = `${result}${n[i] ** 2}`;
  }

  return +result;
}

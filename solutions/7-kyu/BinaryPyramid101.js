const binaryPyramid = (m, n) => {
  let result = 0;

  for (let i = m; i <= n; i++) {
    result += +i.toString(2);
  }

  return result.toString(2).toString();
};

const bubblesortOnce = (arr) => {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    if (result[i] > result[i + 1]) {
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }

  return result;
};

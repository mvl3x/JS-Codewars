const deleteNth = (arr, n) => {
  const cache = {};

  return arr.filter((item) => {
    cache[item] = cache[item] ? cache[item] + 1 : 1;
    return cache[item] <= n;
  });
};

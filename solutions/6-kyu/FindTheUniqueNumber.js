const findUniq = (arr) => {
  const dict = arr.reduce((acc, item) => {
    acc[item] = acc[item] + 1 || 1;
    return acc;
  }, {});

  return Object.keys(dict).filter((key) => dict[key] === 1);
};

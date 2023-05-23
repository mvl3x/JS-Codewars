const duplicateCount = (text) => {
  const dict = text
    .toLowerCase()
    .split("")
    .reduce((dict, item) => {
      dict[item] ? (dict[item] += 1) : (dict[item] = 1);
      return dict;
    }, {});

  return Object.keys(dict).filter((key) => dict[key] > 1).length;
};

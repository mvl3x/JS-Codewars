const sortByBit = (arr) => {
  const bitCounter = (num) => num.toString(2).replace(/0/g, "").length;

  return arr.sort((a, b) => bitCounter(a) - bitCounter(b) || a - b);
};

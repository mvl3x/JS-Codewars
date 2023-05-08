const solution = (firstArray, secondArray) =>
  firstArray.reduce(
    (sum, current, index) => sum + (current - secondArray[index]) ** 2,
    0
  ) / firstArray.length;

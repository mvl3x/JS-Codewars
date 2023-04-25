const calculate =
  (...args1) =>
  (...args2) =>
    [...args1, ...args2].reduce((acc, item) => acc + item);

console.log(calculate(2, 4)(3, 7, 1));

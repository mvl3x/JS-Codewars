const persistence = (num) => {
  let newNum = num;
  let counter = 0;

  while (newNum > 9) {
    newNum = newNum
      .toString()
      .split("")
      .reduce((product, digit) => product * digit);
    counter++;
  }

  return counter;
};

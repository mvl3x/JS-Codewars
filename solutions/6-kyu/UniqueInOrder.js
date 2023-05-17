const uniqueInOrder = (iterable) =>
  [...iterable].filter((item, index) => item !== iterable[index - 1]);

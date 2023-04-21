const getLengthOfMissingArray = (arrayOfArrays) => {
  const lengthsArr = (arrayOfArrays || [])
    .map((item) => (item ? item.length : 0))
    .sort((a, b) => a - b);

  if (lengthsArr.includes(0)) return 0;

  for (let i = lengthsArr.at(0); i <= lengthsArr.at(-1); i++) {
    if (!lengthsArr.includes(i)) return i;
  }

  return 0;
};

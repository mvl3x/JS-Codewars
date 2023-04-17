const duplicateEncode = (word) => {
  let newWord = word.toLowerCase();
  const dict = {};

  for (let char of newWord) {
    char in dict ? (dict[char] += 1) : (dict[char] = 1);
  }

  return newWord
    .split("")
    .map((key) => (dict[key] === 1 ? "(" : ")"))
    .join("");
};

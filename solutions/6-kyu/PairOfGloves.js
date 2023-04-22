const numberOfPairs = (gloves) => {
  let counter = 0;
  const cache = new Set();

  for (let color of gloves) {
    if (cache.has(color)) {
      cache.delete(color);
      counter++;
    } else cache.add(color);
  }

  return counter;
};

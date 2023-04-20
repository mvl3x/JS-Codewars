const deepCount = (array) =>
  array.reduce(
    (acc, current) =>
      typeof current !== "object" ? acc + 1 : acc + 1 + deepCount(current),
    0
  );

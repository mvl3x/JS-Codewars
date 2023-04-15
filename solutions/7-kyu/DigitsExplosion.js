const explode = (s) =>
  s
    .split("")
    .map((digit) => digit.repeat(digit))
    .join("");

const nthFibo = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  else return nthFibo(n - 2) + nthFibo(n - 1);
};

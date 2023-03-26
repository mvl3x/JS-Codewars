function digitalRoot(n) {
  let num = n;

  while (num >= 10) {
    const numbersArray = num.toString().split("");
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
      sum += +numbersArray[i];
    }

    num = sum;
  }

  return num;
}

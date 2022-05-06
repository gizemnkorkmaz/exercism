export const steps = (int) => {
  let n = int;
  let loopCount = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    if (n <= 0) {
      throw new Error("Only positive numbers are allowed");
    }
    loopCount++;
  }

  return loopCount;
};

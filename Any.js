// 동전 greedy
const test = (n, coins) => {
  let sum = 0;
  let shared = 0;

  for (const coin of coins) {
    shared = Math.floor(n / coin);
    n %= coin;
    sum += shared;
  }

  return sum;
};

n = 1260;
coins = [500, 100, 50, 10];
test(n, coins);

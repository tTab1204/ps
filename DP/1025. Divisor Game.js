/**
 * @param {number} n
 * @return {boolean}
 */

var divisorGame = function (n) {
  /**
   * n = 1  - false, Alice 패배
   * n = 2 - true, Alice 승리
   * n = 3 - false, Alice 패배
   * n = 4 - true, Alice 승리
   * 홀수는 Alice가 이기고, 짝수는 Alice가 진다.
   */

  return n % 2 === 0;
};

// DP 이용방법
var divisorGame = function (n) {
  let dp = [];
  dp[0] = false;

  // run for loop from 1 to n
  for (let x = 1; x < n; x++) {
    // if n is even then set xth value (odd index value) of dp as true
    if (n % 2 === 0) {
      dp[x] = true;
    } else {
      // else set xth value (even index value) of dp as false
      dp[x] = false;
    }
  }

  // return n-1th index value of dp
  return dp[n - 1];
};

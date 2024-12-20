var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0); // dp 배열 초기화 (크기는 n + 1)
  dp[0] = 1; // 0번째 계단에 도달하는 방법은 1가지 (기본 상태)
  dp[1] = 1; // 1번째 계단에 도달하는 방법은 1가지 (1단계만 올라가기)

  // 2번째 계단부터 n번째 계단까지 계산
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // dp[i]는 (i-1)번 계단에서 1단계 올라가거나, (i-2)번 계단에서 2단계 올라가는 방법
  }

  return dp[n]; // n번째 계단에 도달하는 방법의 수를 반환
};

var maxProfit = function (prices) {
  let maxProfit = 0;
  let minBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(prices[i], minBuy);
    maxProfit = Math.max(prices[i] - minBuy, maxProfit);
  }
  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  let l = 0;
  let r = 1;

  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      l = r;
    } else {
      if (prices[r] - prices[l] > profit) {
        profit = prices[r] - prices[l];
      }
    }
    r++;
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

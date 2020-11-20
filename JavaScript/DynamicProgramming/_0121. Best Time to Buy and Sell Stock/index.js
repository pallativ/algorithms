const maxProfit = function (prices) {
    let maximumProfit = 0, profit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            profit = prices[j] - prices[i];
            if (profit > maximumProfit) {
                maximumProfit = profit;
            }
        }
    }
    return maximumProfit;
};

module.exports = {maxProfit}
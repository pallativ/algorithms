const maxProfitBruteforce = function (prices) {
    const calculate = function (s) {
        if (s >= prices.length)
            return 0;
        let max = 0;
        for (let start = s; s < prices.length; start++) {
            let maxProfit = 0;
            for (let j = start + 1; j < prices.length; j++) {
                if (prices[j] > prices[start]) {
                    let profit = calculate(j + 1) + (prices[j] - prices[start]);
                    if (profit > maxProfit)
                        maxProfit = profit;
                }
            }
            if (maxProfit > max) {
                max = maxProfit;
            }
        }
        return max;
    }
};

const singlePass = function (prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxProfit += prices[i] - prices[i - 1];
    }
    return maxProfit;
}

const peekVally = function (prices) {
    let i = 0;
    let vally = prices[0];
    let peek = prices[0];
    let maxProfit = 0;
    while (i < prices.length - 1) {
        // find vally
        while (i < prices.length - 1 && prices[i] >= prices[i + 1])
            i++;
        vally = prices[i];
        // find peek;
        while (i < prices.length - 1 && prices[i] <= prices[i + 1])
            i++;
        peek = prices[i];
        maxProfit += peek - vally;
    }
}


module.exports = {singlePass, maxProfitBruteforce}
let knapsack = function (profits, weights, capacity, currentIndex) {
    let knapsackRecursive = function (profits, weights, capacity, currentIndex) {
        if (capacity <= 0 || currentIndex >= weights.length)
            return 0;

        let profit1 = 0, profit2 = 0;

        if (weights[currentIndex] <= capacity)
            profit1 = profits[currentIndex] + knapsackRecursive(profits, weights,
                capacity - weights[currentIndex], currentIndex + 1);

        profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

        return Math.max(profit1, profit2);
    }
    return knapsackRecursive(profits, weights, capacity, currentIndex);
}
module.exports = {knapsack}
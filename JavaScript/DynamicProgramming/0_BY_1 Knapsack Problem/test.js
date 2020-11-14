const {knapsack} = require('./index');

test("Test1", () => {
    let profits = [1, 2, 3, 6, 7];
    let weights = [2, 3, 4, 5, 1];
    let capacity = 6;
    let result = knapsack(profits, weights, capacity, 0)
    console.log(result);
})

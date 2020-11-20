const {maxProfit} = require('./index');

test("Input: [7,1,5,3,6,4]", () => {
    let input = [7, 1, 5, 3, 6, 4];
    let result = maxProfit(input);
    expect(result).toBe(5);
});

test("Input: [7,6,4,3,1]", () => {
    let input = [7, 6, 4, 3, 1];
    let result = maxProfit(input);
    expect(result).toBe(0);
});
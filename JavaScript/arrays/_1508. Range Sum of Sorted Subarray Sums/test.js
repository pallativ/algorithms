const { rangeSum } = require('./index')
test("Input: nums = [1,2,3,4], n = 4, left = 1, right = 5", () => {
    let sum = rangeSum([1,2,3,4], 4, 1,5);
    expect(sum).toBe(13);
});

test("Input: nums = [1,2,3,4], n = 4, left = 1, right = 5", () => {
    let sum = rangeSum([1,2,3,4], 4, 3,4);
    expect(sum).toBe(6);
});

test("Input: nums = [1,2,3,4], n = 4, left = 1, right = 5", () => {
    let sum = rangeSum([1,2,3,4], 4, 1,10);
    expect(sum).toBe(50);
});
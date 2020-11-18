const {canPartition} = require('./index')
test("Input: nums = [1,5,11,5]", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
});

test("Input: nums = [1,2,3,5]", () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
});
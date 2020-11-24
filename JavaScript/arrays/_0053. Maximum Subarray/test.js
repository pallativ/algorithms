const {maxSubArray} = require('./index')
test("Input: nums = [-2,1,-3,4,-1,2,1,-5,4]", () => {
    let result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).toBe(6);
});

test("Input: nums = [1]", () => {
    let result = maxSubArray([1]);
    expect(result).toBe(1);
});

test("Input: nums = [0]", () => {
    let result = maxSubArray([0]);
    expect(result).toBe(0);
});

test("Input: nums = [-1]", () => {
    let result = maxSubArray([-1]);
    expect(result).toBe(-1);
});


test("Input: nums = [-2147483647]", () => {
    let result = maxSubArray([-2147483647]);
    expect(result).toBe(-2147483647);
});

test("Input: nums = [-2,-1]", () => {
    let result = maxSubArray([-2,-1]);
    expect(result).toBe(-1);
});


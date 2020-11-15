const {canDistribute} = require("./index");

test("Input: nums = [1,2,3,4], quantity = [2]", () => {
    let result = canDistribute([1,2,3,4], [2]);
    expect(result).toBe(false);
});

test("Input: nums = [1,2,3,3], quantity = [2]", () => {
    let result = canDistribute([1,2,3,3], [2]);
    expect(result).toBe(true);
});


test("Input: nums = [1,1,2,2], quantity = [2,2]", () => {
    let result = canDistribute([1,1,2,2], [2,2]);
    expect(result).toBe(true);
});


test("Input: nums = [1,1,2,3], quantity = [2,2]", () => {
    let result = canDistribute([1,1,2,3], [2,2]);
    expect(result).toBe(false);
});

test("Input: nums = [1,1,1,1,1], quantity = [2,3]", () => {
    let result = canDistribute([1,1,1,1,1], [2,3]);
    expect(result).toBe(true);
});

test("Input: nums = [1,1,2,2,1], quantity = [2,3]", () => {
    let result = canDistribute([1,1,2,2,1], [2,3]);
    expect(result).toBe(true);
});


test("Input: nums = [1,1,1,1,2,2,2], quantity =   [3,2,2]", () => {
    let result = canDistribute([1,1,1,1,2,2,2],   [3,2,2]);
    expect(result).toBe(true);
});



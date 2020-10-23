const { reversePairs } = require("./index");

test("IInput: [1,3,2,3,1]", () => {
    expect(reversePairs([1,3,2,3,1])).toBe(2);
});

test("Input: [2,4,3,5,1]", () => {
    expect(reversePairs([2,4,3,5,1])).toBe(3);
});
const {findMaxConsecutiveOnes} = require("./index");

test("Input : 101101 -> 2", () => {
    let arr = "101101".split('').map(t => parseInt(t));
    expect(findMaxConsecutiveOnes(arr)).toBe(2);
});

test("Input : 1011101 -> 3", () => {
    let arr = "1011101".split('').map(t => parseInt(t));
    expect(findMaxConsecutiveOnes(arr)).toBe(3);
});

test("Input : 1011101 -> 1", () => {
    let arr = "1010101".split('').map(t => parseInt(t));
    expect(findMaxConsecutiveOnes(arr)).toBe(1);
});
const { calculateTime } = require("./index");

test("Calculate Time", () => {
    expect(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")).toBe(4);
});
test("Calculate Time", () => {
    expect(calculateTime("pqrstuvwxyzabcdefghijklmno", "leetcode")).toBe(73);
});
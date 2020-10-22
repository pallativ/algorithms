const { longestCommonPrefix } = require("./index");

test("freqAlphabets - [\"flower\",\"flow\",\"flight\"]", () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
});

test("freqAlphabets - [\"flower\"]", () => {
    expect(longestCommonPrefix(["flower"])).toBe("flower");
});

test("freqAlphabets - []", () => {
    expect(longestCommonPrefix([])).toBe("");
});

test("freqAlphabets - 1326#", () => {
    expect(longestCommonPrefix("dog","racecar","car")).toBe("");
});


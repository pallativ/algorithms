const { strStr } = require("./index");

test("Input: haystack = hello, needle = ll", () => {
    expect(strStr("hello", "ll")).toBe(2);
});

test("Input: haystack = aaaaa, needle = bba", () => {
    expect(strStr("aaaaa", "bba")).toBe(-1);
});
test("Input: haystack = , needle = ", () => {
    expect(strStr("","")).toBe(0);
});

test("Input: haystack = , needle = ", () => {
    expect(strStr("a","")).toBe(0);
});

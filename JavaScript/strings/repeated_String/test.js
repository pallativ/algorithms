const {repeatedSubstringPattern} = require("./index");
test("Test Repeated SubString", () => {
    expect(repeatedSubstringPattern("abcabc")).toBe(true);
    expect(repeatedSubstringPattern("abcdabc")).toBe(false);
    expect(repeatedSubstringPattern("aa")).toBe(true);
});

test("Test Repeated SubString - v1", () => {
    expect(repeatedSubstringPattern("abcabcabc")).toBe(true);
    expect(repeatedSubstringPattern("aaabbcccc")).toBe(false);
});
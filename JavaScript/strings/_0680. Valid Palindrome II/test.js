const { validPalindrome } = require("./index");

test("Is Valid Palindrome - aba", () => {
    expect(validPalindrome("aba")).toBe(true);
});

test("Is Valid Palindrome - abca", () => {
    expect(validPalindrome("abca")).toBe(true);
});

test("Is Valid Palindrome - abc", () => {
    expect(validPalindrome("abc")).toBe(false);
});

test("Is Valid Palindrome - abcaa", () => {
    expect(validPalindrome("abcaa")).toBe(false);
});

test("Is Valid Palindrome - abcaba", () => {
    expect(validPalindrome("abcaba")).toBe(true);
});

test("Is Valid Palindrome - \"deeee\"", () => {
    expect(validPalindrome("deeee")).toBe(true);
});

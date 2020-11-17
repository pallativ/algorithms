const {longestPalindrome} = require('./index');

test("get Longest Palindrome", () => {
    let result = longestPalindrome("babad");
    expect(result).toBe('bab');
});

test("get Longest Palindrome - cbbd", () => {
    let result = longestPalindrome("cbbd");
    expect(result).toBe('bb');
});

test("Input: s = \"a\"", () => {
    let result = longestPalindrome("a");
    expect(result).toBe("a");
});

test("Input: s = \"ac\"", () => {
    let result = longestPalindrome("ac");
    expect(result).toBe("a");
});
const {longestPalindrome, expandCenter} = require('./index');

test("get Longest Palindrome", () => {
    let result = longestPalindrome("babad");
    expect(expandCenter("babad")).toBe('bab');
    expect(result).toBe('bab');
});

test("get Longest Palindrome - cbbd", () => {
    let result = longestPalindrome("cbbd");
    expect(expandCenter("cbbd")).toBe('bb');
    expect(result).toBe('bb');
});

test("Input: s = \"a\"", () => {
    let result = longestPalindrome("a");
    expect(expandCenter("a")).toBe('a');
    expect(result).toBe("a");
});

test("Input: s = \"ac\"", () => {
    let result = longestPalindrome("ac");
    expect(expandCenter("ac")).toBe('a');
    expect(result).toBe("a");
});
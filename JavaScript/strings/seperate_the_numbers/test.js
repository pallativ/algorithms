const { separateNumbers } = require('./index')

test('seperate the numbers:-> 1234 -> YES 1', () => {
    expect(separateNumbers("1234")).toBe("YES 1");
});

test('seperate the numbers:-> 91011 -> YES 9', () => {
    expect(separateNumbers("91011")).toBe("YES 9");
});

test('seperate the numbers:-> 99100 -> YES 99', () => {
    expect(separateNumbers("99100")).toBe("YES 99");
});

test('seperate the numbers:->', () => {
    expect(separateNumbers("101103")).toBe("NO");
});

test('seperate the numbers:->', () => {
    expect(separateNumbers("010203")).toBe("NO");
    expect(separateNumbers("13")).toBe("NO");
});

test('seperate the numbers:->', () => {
    expect(separateNumbers("13")).toBe("NO");
});

test('seperate the numbers:-> 90071992547409929007199254740993', () => {
    expect(separateNumbers("90071992547409929007199254740993")).toBe("YES 9007199254740992")
});

test('seperate the numbers:-> 45035996273704964503599627370497', () => {
    expect(separateNumbers("45035996273704964503599627370497")).toBe("YES 4503599627370496")
});


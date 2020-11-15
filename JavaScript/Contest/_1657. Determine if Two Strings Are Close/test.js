const {closeStrings} = require('./index')

test("Input: word1 = \"abc\", word2 = \"bca\"", () => {
    let result = closeStrings("abc", "bca");
    expect(result).toBe(true);
});

test("Input: word1 = \"a\", word2 = \"aa\"", () => {
    let result = closeStrings("a", "aa");
    expect(result).toBe(false);
})

test("Input: word1 = \"cabbba\", word2 = \"abbccc\"", () => {
    let result = closeStrings("cabbba", "abbccc");
    expect(result).toBe(true);

});

test("Input: word1 = \"cabbba\", word2 = \"aabbss\"", () => {
    let result = closeStrings("cabbba", "aabbss");
    expect(result).toBe(false);

});



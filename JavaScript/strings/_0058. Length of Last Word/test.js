const {lengthOfLastWord} = require("./index");

test("Length of Last Word", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
});

test("Length of Last Word", () => {
    expect(lengthOfLastWord("Hello World from Veerakondalu")).toBe(12);
});

test("Length Empty sentence", () => {
    expect(lengthOfLastWord("")).toBe(0);
});

test("Space at end of sentence", () => {
    expect(lengthOfLastWord("a ")).toBe(1);
});
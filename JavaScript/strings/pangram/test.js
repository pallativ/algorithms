const { pangrams } = require('./index')

test("Test Pangram", () => {
    expect(pangrams("We promptly judged antique ivory buckles for the next prize")).toBe("pangram")
})

test("Test Not Pangram", () => {
    expect(pangrams("We promptly judged antique ivory buckles for the prize")).toBe("not pangram")
})
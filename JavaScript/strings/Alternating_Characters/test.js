const { alternatingCharacters } = require('./index')

test("Test Alternating Characters", () =>{
    expect(alternatingCharacters("AAAAA")).toBe(4);
})
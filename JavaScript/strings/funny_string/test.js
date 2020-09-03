const { funny_string } = require('./index')

test("Test Funny String : abc", () => {
    expect(funny_string("abc")).toBe("Funny")
})


test("Test Funny String : acxz", () => {
    expect(funny_string("acxz")).toBe("Funny")
})


test("Test Funny String : bcxz", () => {
    expect(funny_string("bcxz")).toBe("Not Funny")
})
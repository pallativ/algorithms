const {gemstones} = require('./index');

test("Gemstones test", () => {
    expect(gemstones(["abc", "bca", "bc"])).toBe(2);
});
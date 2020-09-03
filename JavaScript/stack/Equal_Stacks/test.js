const {equalStacks} = require('./index');

test("Equal Height", () => {
    expect(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1])).toBe(5);
});
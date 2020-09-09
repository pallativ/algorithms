const {containsPattern} = require("./index");

test("Container Pattern", () => {
    expect(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)).toBe(true);
    expect(containsPattern([1,2,3,1,2], 2, 2)).toBe(false);
    expect(containsPattern([2,2,2,2], 2, 3)).toBe(false);
    expect(containsPattern([3,2,2,1,2,2,1,1,1,2,3,2,2], 3, 2)).toBe(true);
});
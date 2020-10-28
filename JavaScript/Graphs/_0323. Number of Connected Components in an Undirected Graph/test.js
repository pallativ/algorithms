const {countComponents} = require('./index')

test("Count Components", () => {
    let actual = countComponents(5, [[0, 1], [1, 2], [3, 4]]);
    expect(actual).toBe(2);
});


test("Count Components", () => {
    let actual = countComponents(5,  [[0, 1], [1, 2], [2, 3], [3, 4]]);
    expect(actual).toBe(1);
});
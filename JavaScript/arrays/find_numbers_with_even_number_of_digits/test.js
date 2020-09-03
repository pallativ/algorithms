const {findNumbers} = require('./index');

test("findNumber - [12,122]", () => {
    expect(findNumbers([12, 122])).toBe(1);
});

test("findNumber - [12,1222]", () => {
    expect(findNumbers([12, 1222])).toBe(2);
});

test("findNumber - [12,1222,1,121212,1212]", () => {
    expect(findNumbers([12, 1222, 1, 121212, 1212])).toBe(4);
});
const {findCircleNum, findCircleNumUnionfind} = require('./index')

test("Find Circles Num -> 2", () => {
    let grid = [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]];
    let result = findCircleNum(grid);
    expect(result).toBe(2);
});

test("Find Circles Num -> 1", () => {
    let grid = [[1, 1, 0],
        [1, 1, 1],
        [0, 1, 1]]
    let result = findCircleNum(grid);
    expect(result).toBe(1);
});


test("Find Circles Num using Union Find", () => {
    let grid = [[1, 1, 0],
        [1, 1, 1],
        [0, 1, 1]]
    let result = findCircleNumUnionfind(grid);
    expect(result).toBe(1);
});

test("Find Circles Num -> 2", () => {
    let grid = [[1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]];
    let result = findCircleNumUnionfind(grid);
    expect(result).toBe(2);
});
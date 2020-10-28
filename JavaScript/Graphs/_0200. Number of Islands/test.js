const {numIslands, numIslandsUsingBfs} = require('./index')
test("Find number Of Islands", () => {
    let grid = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"]
    ];
    let result = numIslands(grid);
    expect(result).toBe(1);
});

test("Find number Of Islands - 3", () => {
    let grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ];
    let result = numIslands(grid);
    expect(result).toBe(3);
});


test("Find number Of Islands using BFS", () => {
    let grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ];
    let result1 = numIslandsUsingBfs(grid);
    expect(result1).toBe(3);
});

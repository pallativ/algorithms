const {maximumMinimumPath} = require('./index')
test("edges = [[5, 4, 5], [1, 2, 6], [7, 4, 6]]", () => {
    const ar = [[5, 4, 5], [1, 2, 6], [7, 4, 6]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(4);
});

test("edges = [[2,2,1,2,2,2],[1,2,2,2,1,2]]", () => {
    const ar = [[2, 2, 1, 2, 2, 2], [1, 2, 2, 2, 1, 2]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(2);
});

test("edges = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]", () => {
    const ar = [[3, 4, 6, 3, 4], [0, 2, 1, 1, 7], [8, 8, 3, 2, 7], [3, 2, 4, 9, 8], [4, 1, 2, 0, 0], [4, 6, 5, 4, 3]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(3);
});


test("edges = [[1]]", () => {
    const ar = [[1]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(1);
});

test("edges = [[1,2]]", () => {
    const ar = [[1, 2]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(1);
});

test("edges = [[1,2][2,4]", () => {
    const ar = [[1, 2], [2, 4]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(1);
});


test("edges = [[0,1,0,0,1],[1,1,0,0,0],[1,0,1,1,1],[1,0,1,0,1],[1,0,1,0,1]]", () => {
    const ar = [[0,1,0,0,1],[1,1,0,0,0],[1,0,1,1,1],[1,0,1,0,1],[1,0,1,0,1]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(0);
});

test("edges = [[2,0,5,2,0],[2,4,4,4,3],[1,5,0,0,0],[5,4,4,3,1],[1,3,1,5,3]]", () => {
    const ar = [[2,0,5,2,0],[2,4,4,4,3],[1,5,0,0,0],[5,4,4,3,1],[1,3,1,5,3]];
    let min = maximumMinimumPath(ar);
    expect(min).toBe(2);
});










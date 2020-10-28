const {validTree} = require('./index')

test("IsValid Tree - [[2, 7], [7, 8], [3, 6], [2, 5], [6, 8], [4, 8], [2, 8], [1, 8], [7, 10], [3, 9]", () => {
    let actual = validTree(11, [[2, 7], [7, 8], [3, 6], [2, 5], [6, 8], [4, 8], [2, 8], [1, 8], [7, 10], [3, 9]]);
    expect(actual).toBe(false);
});

test("IsValid Tree - [[1,4],[3,4],[1,3],[1,2],[4,5]]", () => {
    let actual = validTree(5, [[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]);
    expect(actual).toBe(false);
});

test("IsValid Tree - [[1,2],[2,3],[2,4],[4,5],[1,5]]", () => {
    let actual = validTree(5, [[1, 2], [2, 3], [2, 4], [4, 5], [1, 5]]);
    expect(actual).toBe(false);
});

test("IsValid Tree - [[1,2], [1,3], [2,3]]", () => {
    let actual = validTree(3, [[1, 2], [1, 3], [2, 3]]);
    expect(actual).toBe(false);
});

test("IsValid Tree - [[1,2], [2,3], [3,4], [1,4], [1,5]]", () => {
    let actual = validTree(5, [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]);
    expect(actual).toBe(false);
});

test("IsValid Tree - [[0,1], [0,2], [0,3], [1,4]]", () => {
    let actual = validTree(5, [[0,1], [0,2], [0,3], [1,4]]);
    expect(actual).toBe(true);
});

test("IsValid Tree - [[0,1], [1,2], [2,3], [1,3], [1,4]]", () => {
    let actual = validTree(5, [[0,1], [1,2], [2,3], [1,3], [1,4]]);
    expect(actual).toBe(false);
});

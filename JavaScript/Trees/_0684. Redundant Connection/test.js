const {findRedundantConnection} = require('./index')

test("Find Redundant Connection - [[2, 7], [7, 8], [3, 6], [2, 5], [6, 8], [4, 8], [2, 8], [1, 8], [7, 10], [3, 9]", () => {
    let actual = findRedundantConnection([[2, 7], [7, 8], [3, 6], [2, 5], [6, 8], [4, 8], [2, 8], [1, 8], [7, 10], [3, 9]]);
    expect(actual).toMatchObject([2, 8]);
});

test("Find Redundant Connection - [[1,4],[3,4],[1,3],[1,2],[4,5]]", () => {
    let actual = findRedundantConnection([[1,4],[3,4],[1,3],[1,2],[4,5]]);
    expect(actual).toMatchObject([1,3]);
});

test("Find Redundant Connection - [[1,2],[2,3],[2,4],[4,5],[1,5]]", () => {
    let actual = findRedundantConnection([[1,2],[2,3],[2,4],[4,5],[1,5]]);
    expect(actual).toMatchObject([1,5]);
});

test("Find Redundant Connection - [[1,2], [1,3], [2,3]]", () => {
    let actual = findRedundantConnection([[1,2], [1,3], [2,3]]);
    expect(actual).toMatchObject([2,3]);
});

test("Find Redundant Connection - [[1,2], [2,3], [3,4], [1,4], [1,5]]", () => {
    let actual = findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]);
    expect(actual).toMatchObject([1,4]);
});






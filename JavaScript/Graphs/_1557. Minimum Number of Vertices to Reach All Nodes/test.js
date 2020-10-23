const { findSmallestSetOfVertices } = require("./index");

test("Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]", () => {
    expect(findSmallestSetOfVertices(6,[[0,1],[0,2],[2,5],[3,4],[4,2]])).toMatchObject([0,3]);
});

test(" n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]", () => {
    expect(findSmallestSetOfVertices(5,[[0,1],[2,1],[3,1],[1,4],[2,4]])).toMatchObject([0,2,3]);
});

// test("freqAlphabets - 1326#", () => {
//     expect(findSmallestSetOfVertices("1326#")).toBe("acz");
// });
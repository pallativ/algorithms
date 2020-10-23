const { allPathsSourceTarget } = require("./index");

test("Input: graph = [[1,2],[3],[3],[]]", () => {
    expect(allPathsSourceTarget([[1,2],[3],[3],[]])).toMatchObject([[0,1,3],[0,2,3]]);
});

test("Input: graph = [[1],[]]", () => {
    expect(allPathsSourceTarget([[1],[]])).toMatchObject([[0,1]]);
});

test("Input: graph = [[1,2,3],[2],[3],[]]", () => {
    expect(allPathsSourceTarget([[1,2,3],[2],[3],[]])).toMatchObject([[0,1,2,3],[0,2,3],[0,3]]);
});


test("Input: graph =  [[1,3],[2],[3],[]]", () => {
    expect(allPathsSourceTarget([[1,3],[2],[3],[]])).toMatchObject([[0,1,2,3],[0,3]]);
});

test("Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]", () => {
    expect(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])).toMatchObject([[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]);
});
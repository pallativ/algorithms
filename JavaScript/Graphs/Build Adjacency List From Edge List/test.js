const {BuildAdjacencyListFromEdgeList, BuildArrayFromEdgeList} = require("./index");

test("edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]", () => {
    let actual = BuildAdjacencyListFromEdgeList([[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]);
    console.log(actual);
    expect(actual)
        .toMatchObject({
            "0": [1, 2],
            "2": [5],
            "3": [4],
            "4": [2]
        });
    let array = BuildArrayFromEdgeList([[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]);
    expect(array).toMatchObject([[1, 2], [], [5], [4], [2]])
    console.log(array);
})
const {primsAlgorithm} = require('./index')

const convertMatrixToEdgeList = function (ar) {
    let edgeList = [];
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar[0].length; j++) {
            if (ar[i][j] !== 0)
                edgeList.push([i, j, ar[i][j]]);
        }
    }
    return edgeList;
}

test("Find Minimum Spanning Tree", () => {
    const edgeListWithWeight = [[1, 2, 7],
        [1, 4, 6],
        [4, 2, 9],
        [4, 3, 8],
        [2, 3, 6]];
    primsAlgorithm(4, edgeListWithWeight);
});

test("Find Minimum Spanning Tree - Case 1", () => {
    const edgeListWithWeight = convertMatrixToEdgeList([[0, 2, 0, 6, 0],
        [2, 0, 3, 8, 5],
        [0, 3, 0, 0, 7],
        [6, 8, 0, 0, 9],
        [0, 5, 7, 9, 0]]);
    //console.log(edgeListWithWeight);
    primsAlgorithm(5, edgeListWithWeight);
});


test("Find Minimum Spanning Tree - Case 2", () => {
    const edgeListWithWeight = [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]];
    primsAlgorithm(5, edgeListWithWeight);
})

test("Find Minimum Spanning Tree - Case 3", () => {
    const edgeListWithWeight = [[1, 6, 5], [1, 2, 25], [6, 5, 20], [5, 4, 16], [5, 7, 18], [4, 3, 8], [4, 7, 14], [3, 2, 12], [2, 7, 10]];
    primsAlgorithm(8, edgeListWithWeight);
})
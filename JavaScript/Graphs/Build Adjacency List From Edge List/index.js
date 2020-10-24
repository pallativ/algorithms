const BuildAdjacencyListFromEdgeList = function (edges) {
    let adjacencyList = {};
    let max = 0;
    for (let i = 0; i < edges.length; i++) {
        let v1 = edges[i][0];
        let v2 = edges[i][1];
        max = Math.max(Math.max(max, v1), v2);
        if (!adjacencyList[v1])
            adjacencyList[v1] = [];
        adjacencyList[v1].push(v2);
    }
    for (let i = 0; i < max; i++) {
        if (!adjacencyList[i])
            adjacencyList[i] = [];
    }
    return adjacencyList;
}

const BuildArrayFromEdgeList = function (edges) {
    let map = BuildAdjacencyListFromEdgeList(edges);
    return Object.values(map);
}

module.exports = {BuildAdjacencyListFromEdgeList, BuildArrayFromEdgeList}
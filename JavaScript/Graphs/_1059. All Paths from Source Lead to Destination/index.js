const BuildAdjacencyListFromEdgeList = function (edges) {
    let adjacencyList = {};
    let max = 0;
    for (let i = 0; i < edges.length; i++) {
        let v1 = edges[i][0];
        let v2 = edges[i][1];
        max = Math.max(Math.max(max, v1), v2);
        if (!adjacencyList[v1])
            adjacencyList[v1] = [];
        if (!adjacencyList[v1].includes(v2))
            adjacencyList[v1].push(v2);
    }
    return adjacencyList;
}

const leadsToDestination = function (n, edges, source, destination) {
    let adjList = BuildAdjacencyListFromEdgeList(edges);
    let visited = [];
    const dfs = function (curr) {
        if (visited.includes(curr)) return false;
        if (!adjList[curr]) return curr === destination;
        visited.push(curr);
        for (let i = 0; i < adjList[curr].length; i++) {
            let node = adjList[curr][i];
            if (!dfs(node)) return false;
        }
        visited = visited.filter(t => t === curr);
        return true;
    }
    return dfs(source);
};
module.exports = {leadsToDestination}
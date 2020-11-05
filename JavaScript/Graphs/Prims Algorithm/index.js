const primsAlgorithm = function (n, edges) {
    let near = new Array(n + 1).fill(Infinity);
    let spanningTree = [];
    const COVERED = -1;
    const getFirstMinimumVertex = function () {
        let min = Number.MAX_VALUE;
        let minimumCostEdge = [];
        for (let edge of edges) {
            let [u, v, w] = edge;
            if (w < min) {
                min = w;
                minimumCostEdge = [u, v, w];
            }
        }
        return minimumCostEdge;
    }

    const getVertexWeight = function (u1, v1) {
        for (let [u, v, w] of edges) {
            if ((u === u1 && v === v1) || (u === v1 && v === u1))
                return w;
        }
        return Infinity;
    }

    const updateNearVertexWithMinimumCost = function (u, v) {
        for (let currVertex = 0; currVertex < n; currVertex++) {
            if (near[currVertex] !== COVERED) {
                let weightOfU = getVertexWeight(currVertex, u);
                let weightOfV = getVertexWeight(currVertex, v);
                near[currVertex] = weightOfV > weightOfU ? u : v;
            }
        }
    }

    const getMinimumCostVertex = function () {
        let min = Number.MAX_VALUE;
        let edge = [Infinity, Infinity];
        for (let i = 0; i < n; i++) {
            if (near[i] !== COVERED) {
                let weight = getVertexWeight(i, near[i]);
                if (min > weight) {
                    min = weight;
                    edge = [i, near[i]];
                }
            }
        }
        return edge;
    }


    /// Get Minimum Cost Edge
    let [u, v] = getFirstMinimumVertex();
    near[u] = COVERED;
    near[v] = COVERED;
    spanningTree.push([u, v]);

    // Loop through all vertex;
    while (u !== Infinity) {
        updateNearVertexWithMinimumCost(u, v);
        [u, v] = getMinimumCostVertex();
        if (u !== Infinity) {
            near[u] = COVERED;
            near[v] = COVERED;
            spanningTree.push([u, v]);
        }
    }
    console.log(spanningTree);
}
module.exports = {primsAlgorithm}
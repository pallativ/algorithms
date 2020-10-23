const findSmallestSetOfVertices = function (n, edges) {
    // Find number of no-inDegree nodes.
    let inDegreeNode = new Array(n).fill(0);
    for (let i = 0; i < edges.length; i++) {
        let toVertex = edges[i][1];
        inDegreeNode[toVertex] = 1;
    }
    let result = [];
    for (let i = 0; i < inDegreeNode.length; i++) {
        if (inDegreeNode[i] === 0)
            result.push(i);
    }
    return result;
};
module.exports = {findSmallestSetOfVertices}
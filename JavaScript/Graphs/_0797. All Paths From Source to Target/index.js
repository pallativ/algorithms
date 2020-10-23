const allPathsSourceTarget = function (graph) {
    let results = [];
    let target = graph.length - 1;
    const explore = function (node, path) {
        if (node === target) {
            results.push([...path]);
            return;
        }
        for (let i = 0; i < graph[node].length; i++) {
            let nextNode = graph[node][i];
            path.push(nextNode);
            explore(nextNode, path);
            path.pop();
        }
    }
    let path = [0];
    explore(0, path);
    return results;
};

module.exports = {allPathsSourceTarget}
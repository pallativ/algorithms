const findRedundantConnection = function (edges) {
    /// In parents array, index represents the node and its value represents the parent.
    let parents = new Array(edges.length + 1);
    for (let i = 0; i < parents.length; i++) {
        parents[i] = i;
    }
    let ranks = new Array(edges.length + 1).fill(0);
    const find = function (x) {
        while (parents[x] !== x) {
            x = parents[x];
        }
        return x;
        // if (parents[x] !== x) {
        //     parents[x] = find(parents[x]); // Path Compression.
        // }
        // return parents[x];
    }

    const union = function (u, v) {
        /// Get the absolute Parent
        const ur = find(u);
        const vr = find(v);
        if (ur === vr)
            return false;
        if (ranks[ur] > ranks[vr]) {
            parents[vr] = ur;
            ranks[ur]++;
        } else if (ranks[ur] < ranks[vr]) {
            parents[ur] = vr;
            ranks[vr]++;
        } else {
            parents[vr] = ur;
            ranks[ur]++;
        }
        return true;
    }

    for (let edge of edges) {
        if (!union(edge[0], edge[1])) return edge;
    }
    return [-1, -1];

};
module.exports = {findRedundantConnection}
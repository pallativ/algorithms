const validTree = function (n, edges) {
    /// Base check
    if (edges.length !== n - 1) return false;


    let parents = new Array(n);
    for (let i = 0; i < n; i++)
        parents[i] = i;

    const find = function (x) {
        while (parents[x] !== x) {
            x = parents[x];
        }
        return x;
    }
    const union = function (u, v) {
        let ur = find(u);
        let vr = find(v);
        if (ur === vr) return false;
        parents[vr] = ur;
        return true;
    }
    for (let edge of edges) {
        if (!union(edge[0], edge[1])) return false;
    }
    return true;
};
module.exports = {validTree}
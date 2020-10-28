const countComponents = function (n, edges) {
    let parents = new Array(n);
    for (let i = 0; i < parents.length; i++)
        parents[i] = i;
    const find = function (x) {
        if (parents[x] !== x)
            parents[x] = find(parents[x]);
        return parents[x];
    }
    const union = function (u, v) {
        let ur = find(u);
        let vr = find(v);
        if (ur !== vr) {
            parents[vr] = ur;
            n--;
        }
    }

    for (let edge of edges) {
        union(edge[0], edge[1]);
    }

    // let count = 0;
    // for (let i = 0; i < parents.length; i++) {
    //     if (i === find(i))
    //         count++;
    // }
    //return count;
    return n;
};

module.exports = {countComponents}
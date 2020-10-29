const findCircleNum = function (grid) {
    let n = grid.length;
    let visited = new Array(n).fill(0);
    let queue = [];
    let count = 0;
    for (let r = 0; r < n; r++) {
        if (visited[r] === 1)
            continue;
        queue.push(r);
        while (queue.length) {
            let node = queue.shift();
            visited[node] = 1;
            for (let c = 0; c < n; c++) {
                if (node !== c && grid[node][c] === 1 && visited[c] === 0) {
                    queue.push(c);
                }
            }
        }
        count++;
    }
    return count;
};
const findCircleNumUnionfind = function (grid) {
    let n = grid.length;
    let parents = new Array(n);
    let count = n;
    const buildDisjointSets = function () {
        for (let i = 0; i < n; i++) {
            parents[i] = i;
        }
    }
    const find = function (x) {
        if (parents[x] !== x)
            parents[x] = find(parents[x]);
        return parents[x];
    }

    const union = function (u, v) {
        let ur = find(u);
        let vr = find(v);
        if (ur != vr) {
            parents[vr] = ur;
            count--;
        }
    }

    const union_find = function () {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === 1)
                    union(r, c);
            }
        }
    }
    buildDisjointSets();
    union_find();
    return count;
}

module.exports = {findCircleNum, findCircleNumUnionfind}
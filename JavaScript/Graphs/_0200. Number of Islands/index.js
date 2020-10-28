const numIslands = function (grid) {
    if (!grid || grid.length == 0) {
        return 0;
    }

    let count = 0;
    let m = grid.length;
    let n = grid[0].length;
    let parents = new Array(m * n).fill(-1);
    let ranks = new Array(m * n);
    let dr = [-1, 1, 0, 0];
    let dc = [0, 0, -1, 1];

    /// First consider Parent itself.
    const getParents = function () {
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                let index = (r * n) + c;
                if (grid[r][c] === '1') {
                    parents[index] = index;
                    ++count;
                }
                ranks[index] = index;
            }
        }
    }

    /// Find the Absolute Parent of the given vertex.
    const find = function (x) {
        // while (parents[x] !== x)
        //     x = parents[x];
        // return x;
        if (parents[x] !== x)
            parents[x] = find(parents[x]);
        return parents[x];
    }

    // union the given u and v
    const union = function (u, v) {
        let ur = find(u);
        let vr = find(v);
        if (ur !== vr) {
            if (ranks[ur] >= ranks[vr]) {
                parents[vr] = ur;
                ranks[ur]++;
            } else if (ranks[ur] < ranks[vr]) {
                parents[ur] = vr;
                ranks[vr]++;
            }
            --count;
        }
    }

    const startScan = function () {
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (grid[r][c] === '1') {
                    // Mark the node as Visited.
                    grid[r][c] = '0';
                    /// this loop is for scanning four directions. N,E,W,S
                    for (let i = 0; i < 4; i++) {
                        let rr = r + dr[i];
                        let cc = c + dc[i];
                        if (rr < 0 || cc < 0 || rr >= m || cc >= n)
                            continue;
                        if (grid[rr][cc] === '1') {
                            union((r * n) + c, (rr * n) + cc);
                        }
                    }
                }
            }
        }
    }

    getParents();
    startScan();
    //console.log(count);
    //console.log(parents);
    return count;
};

module.exports = {numIslands};
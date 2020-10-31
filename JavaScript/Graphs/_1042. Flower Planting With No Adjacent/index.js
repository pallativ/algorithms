const gardenNoAdj = function (n, paths) {
    let ans = new Array(n).fill(0);
    let map = {};
    for (let path of paths) {
        let [u, v] = path;
        if (!map[u]) map[u] = [];
        if (!map[v]) map[v] = [];
        map[u].push(v);
        map[v].push(u);
    }
    const dfs = function (v) {
        if (ans[v - 1] !== 0)
            return;
        let buffer = new Array(n + 1).fill(false);
        if (map[v]) {
            for (let nb of map[v]) {
                buffer[ans[nb - 1]] = true;
            }
        }

        for (let i = 1; i <= n; i++) {
            if (buffer[i] === false) {
                ans[v - 1] = i;
                break;
            }
        }
        if (map[v]) {
            for (let nb of map[v]) {
                dfs(nb);
            }
        }
    }
    for (let i = 1; i <= n; i++)
        dfs(i);
    console.log(ans)
    return ans;
};

module.exports = {gardenNoAdj}
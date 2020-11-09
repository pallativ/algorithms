const lexicalOrder = function (n) {
    const dfs = function (n, prefix) {
        result.push(prefix);
        for (let i = 0; i <= 9 && (prefix * 10) + i <= n; i++) {
            dfs(n, (prefix * 10) + i);
        }
    }

    let result = [];
    for (let i = 1; i < 9; i++) {
        dfs(n, i);
    }
    return result;
};
module.exports = {lexicalOrder}
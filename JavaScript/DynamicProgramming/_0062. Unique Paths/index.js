const uniquePaths = function (m, n) {
    let dp = Array(m).fill(1).map(() => Array(n).fill(1));
    //console.log(dp);

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }
    return dp[m - 1][n - 1];
};
module.exports = {uniquePaths}
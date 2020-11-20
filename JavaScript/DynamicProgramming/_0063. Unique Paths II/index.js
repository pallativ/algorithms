const uniquePathsWithObstacles = function (obstacleGrid) {
    let dp = Array(obstacleGrid.length).fill(obstacleGrid[0].length).map(() => Array(n).fill(1));
    //console.log(dp);

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (obstacleGrid[row][col] === 0)
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
            else
                dp[row][col] = 0;
        }
    }
    return dp[m - 1][n - 1];
};
module.exports = {uniquePathsWithObstacles}
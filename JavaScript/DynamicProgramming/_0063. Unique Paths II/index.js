const uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (obstacleGrid[0][0] === 1)
        return 0;
    for (let r = 1; r < m; r++) {
        obstacleGrid[r][0] = obstacleGrid[r][0] === 0 && obstacleGrid[r - 1][0] === 1 ? 1 : 0;
    }

    for (let c = 1; c < m; c++) {
        obstacleGrid[0][c] = obstacleGrid[0][c] === 0 && obstacleGrid[0][c - 1] === 1 ? 1 : 0;
    }


    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (obstacleGrid[row][col] === 0)
                obstacleGrid[row][col] = obstacleGrid[row - 1][col] + obstacleGrid[row][col - 1];
            else
                obstacleGrid[row][col] = 0;
        }
    }
    return obstacleGrid[m - 1][n - 1];
};
module.exports = {uniquePathsWithObstacles}
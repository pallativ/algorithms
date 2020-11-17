const longestPalindromeSubseq = function (s) {
    const matrix = new Array(s.length).fill(0).map(() => new Array(s.length).fill(-1));
    //console.log(matrix);
    const lp = function (i, j) {
        if (i < 0 || i > s.length || j < 0 || j > s.length)
            return 0;
        if (matrix[i][j] !== -1)
            return matrix[i][j];
        if (i === j) {
            matrix[i][j] = 1;
        } else if (s[i] === s[j]) {
            if (i + 1 === j) {
                matrix[i][j] = 2;
            } else {
                matrix[i][j] = 2 + lp(i + 1, j - 1);
            }
        } else {
            matrix[i][j] = Math.max(lp(i + 1, j), lp(i, j - 1));
        }
        return matrix[i][j];
    }
    return lp(0, s.length - 1);
};
module.exports = {longestPalindromeSubseq}